import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, Create, ReferenceInput, SelectInput, NumberInput, DateInput, ImageField, ImageInput, TextInput }


    from "react-admin";
export const listSale = (props) =>
(
    <List {...props} style={{ overflowX: "auto" }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="quantitySold" />
            <TextField source="saleDate" />
            <TextField source="product.thumbnail"  />
            <TextField source="product.title" />
            <EditButton />
        </Datagrid>
    </List>
);
export const editSale = (props) =>
(
    <Edit {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>
            <NumberInput source="quantitySold" />
            <DateInput source="saleDate" />
            <TextInput source="product.thumbnail"  />
            <ReferenceInput label="Products"
                source="product.id"
                reference="products">
                <SelectInput optionText="title" />

            </ReferenceInput>

        </SimpleForm>
    </Edit>
);
export const createSale = (props) =>
(
    <Create {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>
            <NumberInput source="quantitySold" />
            <DateInput source="saleDate" />
            <TextInput source="product.thumbnail" />
            <ReferenceInput label="Products"
                source="product.id"
                reference="products">

                <SelectInput optionText="title" />

            </ReferenceInput>


        </SimpleForm>
    </Create>
);