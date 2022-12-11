import React from 'react'
import { Card, Checkbox, FormControlLabel, FormGroup, FormControl, RadioGroup, FormLabel, Radio, Hidden } from '@mui/material'

import { useState } from 'react';
import { Stack } from '@mui/system';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Main = () => {
    return ( <
        >
        <
        Card sx = {
            { padding: '20px', margin: '20px', height: '800px' } } >
        <
        FormGroup >
        <
        FormControlLabel control = { < Checkbox / > }
        label = "2021" / >
        <
        FormControlLabel control = { < Checkbox / > }
        label = "2022" / >
        <
        FormControlLabel control = { < Checkbox / > }
        label = "2023" / >
        <
        /FormGroup>

        <
        Stack direction = 'row' >
        <
        Card sx = {
            { width: '200px', marginLeft: '100px', paddingLeft: '20px' } } >
        <
        FormControl >
        <
        FormLabel id = "demo-radio-buttons-group-label" > Year: 2021 < /FormLabel> <
        RadioGroup aria - labelledby = "demo-radio-buttons-group-label"
        name = "radio-buttons-group" >
        <
        FormControlLabel value = "female"
        control = { < Radio / > }
        label = "Jan-Apr" / >
        <
        FormControlLabel value = "male"
        control = { < Radio / > }
        label = "May-Aug" / >
        <
        FormControlLabel value = "other"
        control = { < Radio / > }
        label = "Sep-Dec" / >
        <
        /RadioGroup> <
        /FormControl> <
        / Card>


        <
        Card sx = {
            { width: '200px', marginLeft: '100px', paddingLeft: '20px' } } >
        <
        FormControl >
        <
        FormLabel id = "demo-radio-buttons-group-label" > Year: 2022 < /FormLabel> <
        RadioGroup aria - labelledby = "demo-radio-buttons-group-label"
        name = "radio-buttons-group" >
        <
        FormControlLabel value = "female"
        control = { < Radio / > }
        label = "Jan-Apr" / >
        <
        FormControlLabel value = "male"
        control = { < Radio / > }
        label = "May-Aug" / >
        <
        FormControlLabel value = "other"
        control = { < Radio / > }
        label = "Sep-Dec" / >
        <
        /RadioGroup> <
        /FormControl> <
        / Card>

        <
        Card sx = {
            { width: '200px', marginLeft: '100px', paddingLeft: '20px' } } >
        <
        FormControl >
        <
        FormLabel id = "demo-radio-buttons-group-label" > Year: 2023 < /FormLabel> <
        RadioGroup aria - labelledby = "demo-radio-buttons-group-label"
        name = "radio-buttons-group" >
        <
        FormControlLabel value = "female"
        control = { < Radio / > }
        label = "Jan-Apr" / >
        <
        FormControlLabel value = "male"
        control = { < Radio / > }
        label = "May-Aug" / >
        <
        FormControlLabel value = "other"
        control = { < Radio / > }
        label = "Sep-Dec" / >
        <
        /RadioGroup> <
        /FormControl> <
        / Card> <
        /Stack> <
        /Card> <
        />
    )
}

export default Main;