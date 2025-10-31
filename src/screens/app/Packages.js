import React, { useState, useEffect } from 'react';
import PricingCard from '../../components/PricingCard'
import { Box, Card, Container, Divider, Typography } from '@mui/joy';
import Tabs from '../../components/ResponsiveAppBar'

export default function Packages() {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://gist.githubusercontent.com/kelsupdate/b29c01f86ce6008c70d984d2a0d466e9/raw/8c4a9e0386aae685f792588b9ada244d85c93fb0/gistfile1.txt')
            .then(response => response.json())
            .then(data => setPackages(data.surveyPlans));
    }, []);
    return (
        <div>
            <Tabs />

            <Card variant="soft" >
                <Typography level="h3" fontWeight={"bold"}>Select Package</Typography>
                <Divider sx={{ mb: 1 }} />
                <Box
                    sx={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 270px), 1fr))',
                        gap: 1,
                    }} >
                    {
                        packages.map((packageItem, index) => (
                            <div key={index}>
                                <PricingCard data={packageItem} index={index} />
                            </div>
                        ))
                    }
                </Box>
            </Card>
        </div>
    )
}
