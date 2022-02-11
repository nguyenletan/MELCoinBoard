import { Card, CardActions, CardContent, Grid, Skeleton } from '@mui/material';
import React from 'react';

function NewSkeleton() {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Card sx={{ width: 300, height: 350 }}>
                <Skeleton variant="rectangular" width={300} height={180} />
                <CardContent style={{ paddingBottom: 0, paddingTop: "10px", maxHeight: "135px", textOverflow: "ellipsis", overflow: "hidden" }}>
                    <Skeleton />
                    <Skeleton width="60%" />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton width="60%" />
                </CardContent>
                <CardActions>
                    <Skeleton width="60%" />
                </CardActions>
            </Card>
        </Grid>
    );
}

export default NewSkeleton;
