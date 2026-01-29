# 🔧 DEBUGGING & DEVELOPMENT GUIDE

**Date:** January 29, 2026  
**Project:** DoAnJaVa E-Commerce

---

## 🚀 QUICK START GUIDE

### Prerequisites
- Java 17+ (Project configured for Java 17, running on Java 21)
- MySQL 5.7+
- Node.js 14+ (for frontend)
- Maven 3.6+ (or use ./mvnw wrapper)

### Database Setup

```bash
# 1. Create database (if not exists)
mysql -u root -p < webbanhang.sql

# 2. Verify database
mysql -u root -p
mysql> USE webbanhang;
mysql> SHOW TABLES;
```

**Expected Output:**
```
Tables in webbanhang:
- categories
- products
- users
- orders
- orderdetail
- cart
- feedback
- gallery
- role
- token
```

### Backend Setup & Run

```bash
# Navigate to backend directory
cd backend

# Build the project
./mvnw.cmd clean package

# Run the application
./mvnw.cmd spring-boot:run

# Server will start on: http://localhost:8080
```

**Expected Console Output:**
```
...
Tomcat started on port(s): 8080 (http)
Started BackendApplication in X.xxx seconds
```

### Frontend Setup & Run

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start

# Frontend will open at: http://localhost:3000
```

### Frontend Admin Setup & Run

```bash
# Navigate to frontend-admin directory
cd frontend-admin

# Install dependencies
npm install

# Start admin dashboard
npm start

# Admin panel will open at: http://localhost:3000 (on different port)
```

---

## 🔌 API ENDPOINTS OVERVIEW

### Base URL
```
http://localhost:8080/api
```

### Available Endpoints

#### Categories
```
GET    /api/categories              - Get all categories
GET    /api/categories/{id}         - Get category by ID
GET    /api/categories/search       - Search categories by name
POST   /api/categories              - Create category
PUT    /api/categories/{id}         - Update category
DELETE /api/categories/{id}         - Delete category
```

#### Products
```
GET    /api/products                - Get all products (paginated)
GET    /api/products/{id}           - Get product by ID
GET    /api/products/category/{id}  - Get products by category
GET    /api/products/search         - Search products
POST   /api/products                - Create product
PUT    /api/products/{id}           - Update product
DELETE /api/products/{id}           - Delete product
```

#### Cart
```
GET    /api/carts                   - Get all carts
GET    /api/carts/{id}              - Get cart by ID
POST   /api/carts                   - Add to cart
PUT    /api/carts/{id}              - Update cart
DELETE /api/carts/{id}              - Remove from cart
```

#### Orders
```
GET    /api/orders                  - Get all orders
GET    /api/orders/{id}             - Get order by ID
POST   /api/orders                  - Create order
PUT    /api/orders/{id}             - Update order
DELETE /api/orders/{id}             - Cancel order
```

#### Users
```
POST   /api/users/register          - Register new user
POST   /api/users/login             - User login
GET    /api/users/{id}              - Get user by ID
PUT    /api/users/{id}              - Update user
DELETE /api/users/{id}              - Delete user
```

#### Others
```
GET    /api/feedback                - Get all feedback
POST   /api/feedback                - Submit feedback
GET    /api/gallery                 - Get product galleries
GET    /api/sales/recent            - Get recent sales
GET    /api/roles                   - Get available roles
```

---

## 🐛 DEBUGGING TIPS

### Backend Debugging

#### 1. Enable Debug Logging
Add to `application.properties`:
```properties
logging.level.root=INFO
logging.level.com.hongochai.backend=DEBUG
logging.level.org.springframework.web=DEBUG
logging.level.org.springframework.security=DEBUG
logging.level.org.hibernate=DEBUG
```

#### 2. Test API with curl
```bash
# Test category endpoint
curl -X GET http://localhost:8080/api/categories

# Test with POST
curl -X POST http://localhost:8080/api/categories \
  -H "Content-Type: application/json" \
  -d '{"name":"New Category","isHome":1}'
```

#### 3. Connect Database
```bash
# MySQL CLI
mysql -u root -p webbanhang

# Check tables
SHOW TABLES;

# Test queries
SELECT * FROM categories;
SELECT * FROM products LIMIT 5;
```

#### 4. Common Issues & Solutions

**Issue: Database connection failed**
```
Error: Communications link failure - Cannot get a connection, pool error
Solution:
1. Ensure MySQL is running
2. Check username/password in application.properties
3. Verify database exists: mysql> SHOW DATABASES;
4. Check port: mysql -u root -p -P 3306
```

**Issue: Compilation error - "cannot find symbol"**
```
Solution:
1. Clean build: mvn clean
2. Refresh IDE
3. Check import statements
4. Ensure Lombok is enabled
```

**Issue: Spring Security disabled**
```
Current state: Security is disabled in BackendApplication.java
To fix: Remove or modify the exclude configuration
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
```

**Issue: Port 8080 already in use**
```
Solution 1: Change port in application.properties
server.port=8081

Solution 2: Kill process using port
Windows: netstat -ano | findstr :8080
Linux/Mac: lsof -i :8080
```

### Frontend Debugging

#### 1. Check Network Requests
```
1. Open Chrome DevTools (F12)
2. Go to Network tab
3. Make API calls and observe responses
4. Check status codes (200, 400, 500, etc.)
```

#### 2. Debug React Components
```
1. Install React Developer Tools extension
2. Open DevTools → Components tab
3. Inspect component state and props
```

#### 3. Common Issues

**Issue: API connection refused**
```
Error: Failed to fetch from http://localhost:8080/api
Solution:
1. Ensure backend is running
2. Check CORS settings in backend
3. Verify API_URL in apiService.js
```

**Issue: Login not working**
```
Solution:
1. Check backend user table: SELECT * FROM user;
2. Verify password hashing
3. Check console for error messages
```

**Issue: Images not loading**
```
Solution:
1. Verify image paths in database
2. Check public/images folder structure
3. Ensure relative paths are correct
```

---

## 📝 CODE PATTERNS & BEST PRACTICES

### Backend Patterns

#### Service Layer Pattern
```java
// Service Interface
public interface CategoryService {
    Category createCategory(Category category);
    List<Category> getAllCategories();
}

// Service Implementation
@Service
@AllArgsConstructor
public class CategoryServiceImpl implements CategoryService {
    private CategoryRepository categoryRepository;
    
    @Override
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }
}

// Controller Usage
@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    
    @PostMapping
    public ResponseEntity<Category> create(@RequestBody Category category) {
        return ResponseEntity.ok(categoryService.createCategory(category));
    }
}
```

#### Error Handling (TO BE IMPLEMENTED)
```java
@ControllerAdvice
public class GlobalExceptionHandler {
    
    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFound(EntityNotFoundException ex) {
        ErrorResponse error = new ErrorResponse("NOT_FOUND", ex.getMessage());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }
}
```

### Frontend Patterns

#### API Service
```javascript
// apiService.js
export function GET_ALL(endpoint) {
    return callApi(endpoint, "GET");
}

export function POST_ADD(endpoint, data) {
    return callApi(endpoint, "POST", data);
}
```

#### Component with State
```javascript
function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        GET_ALL("products")
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return <div>{/* Render products */}</div>;
}
```

---

## 📊 DATABASE OPERATIONS

### Backup & Restore

```bash
# Backup database
mysqldump -u root -p webbanhang > webbanhang_backup.sql

# Restore database
mysql -u root -p webbanhang < webbanhang_backup.sql
```

### Common Queries

```sql
-- Check products
SELECT * FROM products LIMIT 10;

-- Check orders with user info
SELECT o.id, o.order_date, o.total_money, u.fullname 
FROM orders o 
JOIN user u ON o.user_id = u.id;

-- Check stock
SELECT title, price, discount FROM products WHERE price > 50;

-- Recent feedback
SELECT * FROM feedback ORDER BY create_at DESC LIMIT 5;
```

---

## 🧪 TESTING CHECKLIST

### Backend Testing

- [ ] All endpoints return correct status codes
- [ ] CRUD operations work properly
- [ ] Database transactions complete
- [ ] Error handling works
- [ ] Authentication/Authorization (when enabled)
- [ ] Performance under load

**Test Template:**
```bash
# Test GET
curl -X GET http://localhost:8080/api/categories -v

# Test POST
curl -X POST http://localhost:8080/api/categories \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","isHome":1}' -v

# Test PUT
curl -X PUT http://localhost:8080/api/categories/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated","isHome":0}' -v

# Test DELETE
curl -X DELETE http://localhost:8080/api/categories/1 -v
```

### Frontend Testing

- [ ] All pages load correctly
- [ ] API calls work properly
- [ ] Forms submit data correctly
- [ ] Navigation works
- [ ] Responsive design on mobile
- [ ] Error messages display properly
- [ ] Loading states work
- [ ] Cart functionality works

---

## 🔐 SECURITY CHECKLIST

- [ ] Enable Spring Security
- [ ] Configure CORS properly
- [ ] Implement password hashing (BCrypt)
- [ ] Add input validation
- [ ] Use HTTPS/SSL
- [ ] Protect sensitive endpoints
- [ ] Implement rate limiting
- [ ] Add audit logging
- [ ] Validate user input
- [ ] Use parameterized queries (JPA does this)

---

## 📈 PERFORMANCE OPTIMIZATION

### Database
- Add indexes on frequently queried columns
- Use pagination for large result sets
- Cache frequently accessed data
- Optimize queries with JPA QueryDSL or specifications

### Backend
- Implement caching (Redis)
- Use connection pooling
- Compress API responses
- Implement pagination
- Add database indexing

### Frontend
- Code splitting with React.lazy()
- Lazy load images
- Minify and compress assets
- Use CDN for static files
- Implement caching headers

---

## 📚 USEFUL RESOURCES

- Spring Boot Documentation: https://spring.io/projects/spring-boot
- React Documentation: https://react.dev
- MySQL Documentation: https://dev.mysql.com/doc
- Material-UI: https://mui.com
- Bootstrap: https://getbootstrap.com

---

## 🆘 GETTING HELP

### Check Logs
1. **Backend Logs**: Console output or log files
2. **Frontend Console**: F12 → Console tab
3. **Browser Network**: F12 → Network tab
4. **Database**: MySQL command line

### Common Issues Database
- See "Common Issues & Solutions" section above

### Contact Points
- Check Spring Boot error messages
- Review React error boundaries
- Verify database connection
- Check API responses in browser dev tools

---

**Last Updated:** January 29, 2026

