'use client'
import { Form, Input, Button } from "@nextui-org/react";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/table";
import React, { useState } from "react";

const  PredictComponent = () => {

    const [submitted, setSubmitted] = useState(null);
    const [show, setShow] = useState(false)
    const handleSubmit = () => {
        setShow(!show);
    }
    return (
        <>
        <Input
            isRequired
            errorMessage="Please enter Number of angel"
            label="Number of Angel 1"
            labelPlacement="outside"
            name="num_angel_one"
            placeholder="Enter Number of angel 1"
            type="text"
        />
         <Input
            errorMessage="Please enter Number of angel"
            label="Number of Angel 2"
            labelPlacement="outside"
            name="num_angel_two"
            placeholder="Enter Number of angel 2"
            type="text"
        />
        <Button type="submit" onClick={handleSubmit} variant="bordered">
            Submit
        </Button>
            {show && (
                <Table aria-label="Example static collection table" className="mt-2">
                <TableHeader>
                    <TableColumn>Radiation</TableColumn>
                    <TableColumn>Watts</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                    <TableCell>40</TableCell>
                    <TableCell>45 </TableCell>
                    </TableRow>
                    <TableRow key="2">
                    <TableCell>50</TableCell>
                    <TableCell>60 </TableCell>
                    </TableRow>
                </TableBody>
                </Table>
            )}
        </>
    )
}

export default PredictComponent;