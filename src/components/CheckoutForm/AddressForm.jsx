import React, {useState, useEffect} from 'react';
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from '@material-ui/core';
import {useForm, FormProvider } from 'react-hook-form';
import FormInput from './CustomTextField';

import { commerce } from '../../lib/commerce';
import { NearMe } from '@material-ui/icons';
 
const AddressForm = ({checkoutToken}) => {
  const methods = useForm();
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivision, setshippingSubdivision] = useState('');
  const [shippingSubdivisions, setshippingSubdivisions] = useState([]);
  const [shippingOption, setshippingOptiion] = useState('');
  const [shippingOptions, setshippingOptions] = useState([]);

  const countries = Object.entries(shippingCountries).map(([code, name]) => ({id:code, label:name}));

  const fetchShippingCountries = async(checkoutTokenId) => {
    const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  
  }; 
 
   useEffect(() => {
       fetchShippingCountries(checkoutToken.id);
    }, []);



  return (
    <>
      <Typography variant='h6' gutterBottom>Shipping Address</Typography>
      <FormProvider {...methods}>
        <form onSubmit=''>
            <Grid container spacing={3}>
                 <FormInput required name='firstName' label='First name'/>
                 <FormInput required name='lastName' label='Last name'/>
                 <FormInput required name='address1' label='Address'/>
                 <FormInput required name='email' label='Email'/>
                 <FormInput required name='city' label='City'/>
                 <FormInput required name='zip' label='ZIP / Postal Code'/>
                 <Grid item xs ={12} sm ={6}>
                    <InputLabel>Shipping country</InputLabel>
                    <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                        {countries.map((country) => (
                           <MenuItem key ={country.id} value ={country.id}>
                               {country.label}
                           </MenuItem>
                        ))}
                    </Select>
                 </Grid>
                 {/* <Grid item xs ={12} sm ={6}>
                    <InputLabel>Shipping subdivision</InputLabel>
                    <Select value={} fullWidth onChanche={}>
                        <MenuItem key ={} value ={}>
                            Select me
                        </MenuItem>
                    </Select>
                 </Grid>
                 <Grid item xs ={12} sm ={6}>
                    <InputLabel>Shipping options</InputLabel>
                    <Select value={} fullWidth onChanche={}>
                        <MenuItem key ={} value ={}>
                            Select me
                        </MenuItem>
                    </Select>
                 </Grid> */}
            </Grid>
        </form>
      </FormProvider>
    </>
  )
}

export default AddressForm