import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, TextInput, Create, NumberInput, DateInput, ReferenceInput, SelectInput }


    from "react-admin";
export const listProducts = (props) =>
(
    <List {...props} style={{ overflowX: "auto" }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="create_at" />
            <TextField source="deleted" />
            <TextField source="discount" />
            <TextField source="price" />
            <TextField source="thumbnail" />
            <TextField source="description" />
            <TextField source="title" />
            <TextField source="update_at" />
            <TextField source="category.name" />
            <EditButton />
        </Datagrid>
    </List>
);
export const editProducts = (props) =>
(
    <Edit {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>

            <DateInput source="create_at" />
            <NumberInput source="deleted" />
            <NumberInput source="discount" />
            <NumberInput source="price" />
            <TextInput source="thumbnail" />
            <TextInput source="description" />
            <TextInput source="title" />
            <DateInput source="update_at" />
            <ReferenceInput label="Category"
                source="category.id"
                reference="categories">

                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
export const createProducts = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <NumberInput source="price" />
            <NumberInput source="discount" />
            <TextInput source="thumbnail" />
            <TextInput source="description" multiline fullWidth />
            <DateInput source="create_at" />
            <DateInput source="updated_at" />
            <NumberInput source="deleted" />
            <ReferenceInput
                label="Category"
                source="category.id"
                reference="categories"
            >
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);