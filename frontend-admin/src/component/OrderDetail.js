import React from "react";
import { List, Datagrid, TextField, Edit, SimpleForm, EditButton, Create, NumberInput, ReferenceInput, SelectInput }


    from "react-admin";
export const listOrderDetail = (props) =>
(
    <List {...props} style={{ overflowX: "auto" }}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="num" />
            <TextField source="price" />
            <TextField source="total_money" />
            <TextField source="product.title" />
            <TextField source="order.fullname" />
            <EditButton />
        </Datagrid>
    </List>
);
export const editOrderDetail = (props) =>
(
    <Edit {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>

            <NumberInput source="num" />
            <NumberInput source="price" />
            <NumberInput source="total_money" />
            <ReferenceInput label="Orders"
                source="order.id"
                reference="orders">
   
                <SelectInput optionText="fullname" />
            </ReferenceInput>
            <ReferenceInput label="Products"
                source="product.id"
                reference="products">

                <SelectInput optionText="title" />
      
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
export const createOrderDetail = (props) =>
(
    <Create {...props} style={{ overflowX: "auto" }}>
        <SimpleForm>

            <NumberInput source="num" />
            <NumberInput source="price" />
            <NumberInput source="total_money" />
            <ReferenceInput label="Orders"
                source="order.id"
                reference="orders">
                <SelectInput optionText="fullname" />
            </ReferenceInput>
            <ReferenceInput label="Products"
                source="product.id"
                reference="products">
                <SelectInput optionText="title" />
          
            </ReferenceInput>
        </SimpleForm>
    </Create>
);