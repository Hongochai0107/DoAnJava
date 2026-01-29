import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, Create, NumberInput, ReferenceInput, SelectInput }


    from "react-admin";
export const listCart = (props) =>
(
    <List {...props} style={{ overflowX: "auto" }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="quantity" />
            <TextField source="product.title"/>
            <EditButton />
        </Datagrid>
    </List>
);
export const editCart = (props) =>
(
    <Edit {...props} style={{ overflowX: "auto" }}>
    <SimpleForm>

    <NumberInput source="quantity" />
    <ReferenceInput label="Product"
        source="product.id"
        reference="products">

        <SelectInput optionText="title" />
        </ReferenceInput>
</SimpleForm>
    </Edit>
);
export const createCart = (props) =>
(
    <Create {...props} style={{ overflowX: "auto" }}>
    <SimpleForm>

    <NumberInput source="quantity" />
    <ReferenceInput label="Product"
        source="product.id"
        reference="products">

        <SelectInput optionText="title" />
        </ReferenceInput>
</SimpleForm>
    </Create>
);