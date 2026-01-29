package com.hongochai.backend.controller;

import java.util.List;
import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hongochai.backend.entity.Category;
import com.hongochai.backend.service.CategoryService;

@RestController
@AllArgsConstructor
@RequestMapping("api/categories")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"}, 
             allowedHeaders = "*",
             methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE},
             exposedHeaders = "Content-Range")
public class CategoryController {
    private CategoryService CategoryService;

    // Create Category REST API annotation này ánh xạ phương thức với yêu cầu HTTP POST tới một đường dẫn cụ thể
    @PostMapping //ánh xạ phương thức với yêu cầu
    public ResponseEntity<Category> createCategory(@RequestBody Category category) {
        Category savedCategory = CategoryService.createCategory(category);
        return new ResponseEntity<>(savedCategory, HttpStatus.CREATED);
    }




    // Get Category by id REST API
    // http://localhost:8080/api/Categorys/1
    @GetMapping("{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable("id") Long CategoryId) {
        Category Category = CategoryService.getCategoryById(CategoryId);
        return new ResponseEntity<>(Category, HttpStatus.OK);
    }

    // Get All Categorys REST API
    // http://localhost:8080/api/Categorys
    @GetMapping
    public ResponseEntity<List<Category>> getAllCategories() {
        List<Category> Categorys = CategoryService.getAllCategories();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range", "item 0-" + Categorys.size() + "/" + Categorys.size());
        return ResponseEntity.ok().headers(headers).body(Categorys);
    }

    // Update Category REST API
    @PutMapping("{id}")
    // http://localhost:8080/api/Categorys/1
    public ResponseEntity<Category> updateCategory(@PathVariable("id") Long CategoryId, @RequestBody Category category) {
        category.setId(CategoryId);
        Category updatedCategory = CategoryService.updateCategory(category);
        return new ResponseEntity<>(updatedCategory, HttpStatus.OK);
    }

    // Delete Category REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable("id") Long CategoryId) {
        CategoryService.deleteCategory(CategoryId);
        return new ResponseEntity<>("Category successfully deleted", HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<Category>> searchCategoriesByName(@RequestParam String name) {
    List<Category> categories = CategoryService.searchCategoriesByName(name);
    return ResponseEntity.ok(categories);
}
}
