import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import spaghetti from '../../assets/spaghetti.png'
import './Recipes.scss';
import {Chip, Stack} from "@mui/material";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";

export default function Recipes() {

        return (
            <div className='recipes'>
                <div className='recipes__card'>
                    <Card>
                        <CardHeader
                            title="Spaghetti Bolognese"
                            subheader={
                                <Stack direction="row" spacing={1}>
                                    <Chip sx={{backgroundColor: 'red', color: 'white'}} label="Meat" />
                                    <Chip sx={{backgroundColor: 'orange', color: 'white'}} label="High Carbs" />
                                </Stack>
                        }
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={spaghetti}
                            alt="Spaghetti Bolognese"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Everyone needs a basic spaghetti bolognese recipe that still tastes great, no matter how simple. Get that depth of flavour by cooking the sauce very gently until it’s super rich. This spag bol is designed to be a low cost recipe..
                            </Typography>
                            <Link to="/recipes/spaghetti">
                                <Button>Check the details!</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
                <div className='recipes__card'>
                    <Card>
                        <CardHeader
                            title="Spaghetti Bolognese"
                            subheader={
                                <Stack direction="row" spacing={1}>
                                    <Chip sx={{backgroundColor: 'red', color: 'white'}} label="Meat" />
                                    <Chip sx={{backgroundColor: 'orange', color: 'white'}} label="High Carbs" />
                                </Stack>
                            }
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={spaghetti}
                            alt="Spaghetti Bolognese"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Everyone needs a basic spaghetti bolognese recipe that still tastes great, no matter how simple. Get that depth of flavour by cooking the sauce very gently until it’s super rich. This spag bol is designed to be a low cost recipe..
                            </Typography>
                            <Link to="/recipes/spaghetti">
                                <Button>Check the details!</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
                <div className='recipes__card'>
                    <Card>
                        <CardHeader
                            title="Spaghetti Bolognese"
                            subheader={
                                <Stack direction="row" spacing={1}>
                                    <Chip sx={{backgroundColor: 'red', color: 'white'}} label="Meat" />
                                    <Chip sx={{backgroundColor: 'orange', color: 'white'}} label="High Carbs" />
                                </Stack>
                            }
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={spaghetti}
                            alt="Spaghetti Bolognese"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Everyone needs a basic spaghetti bolognese recipe that still tastes great, no matter how simple. Get that depth of flavour by cooking the sauce very gently until it’s super rich. This spag bol is designed to be a low cost recipe..
                            </Typography>
                            <Link to="/recipes/spaghetti">
                                <Button>Check the details!</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
                <div className='recipes__card'>
                    <Card>
                        <CardHeader
                            title="Spaghetti Bolognese"
                            subheader={
                                <Stack direction="row" spacing={1}>
                                    <Chip sx={{backgroundColor: 'red', color: 'white'}} label="Meat" />
                                    <Chip sx={{backgroundColor: 'orange', color: 'white'}} label="High Carbs" />
                                </Stack>
                            }
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={spaghetti}
                            alt="Spaghetti Bolognese"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Everyone needs a basic spaghetti bolognese recipe that still tastes great, no matter how simple. Get that depth of flavour by cooking the sauce very gently until it’s super rich. This spag bol is designed to be a low cost recipe..
                            </Typography>
                            <Link to="/recipes/spaghetti">
                                <Button>Check the details!</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
                <div className='recipes__card'>
                    <Card>
                        <CardHeader
                            title="Spaghetti Bolognese"
                            subheader={
                                <Stack direction="row" spacing={1}>
                                    <Chip sx={{backgroundColor: 'red', color: 'white'}} label="Meat" />
                                    <Chip sx={{backgroundColor: 'orange', color: 'white'}} label="High Carbs" />
                                </Stack>
                            }
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={spaghetti}
                            alt="Spaghetti Bolognese"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Everyone needs a basic spaghetti bolognese recipe that still tastes great, no matter how simple. Get that depth of flavour by cooking the sauce very gently until it’s super rich. This spag bol is designed to be a low cost recipe..
                            </Typography>
                            <Link to="/recipes/spaghetti">
                                <Button>Check the details!</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>                <div className='recipes__card'>
                <Card>
                    <CardHeader
                        title="Spaghetti Bolognese"
                        subheader={
                            <Stack direction="row" spacing={1}>
                                <Chip sx={{backgroundColor: 'red', color: 'white'}} label="Meat" />
                                <Chip sx={{backgroundColor: 'orange', color: 'white'}} label="High Carbs" />
                            </Stack>
                        }
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={spaghetti}
                        alt="Spaghetti Bolognese"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Everyone needs a basic spaghetti bolognese recipe that still tastes great, no matter how simple. Get that depth of flavour by cooking the sauce very gently until it’s super rich. This spag bol is designed to be a low cost recipe..
                        </Typography>
                        <Link to="/recipes/spaghetti">
                            <Button>Check the details!</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>                <div className='recipes__card'>
                <Card>
                    <CardHeader
                        title="Spaghetti Bolognese"
                        subheader={
                            <Stack direction="row" spacing={1}>
                                <Chip sx={{backgroundColor: 'red', color: 'white'}} label="Meat" />
                                <Chip sx={{backgroundColor: 'orange', color: 'white'}} label="High Carbs" />
                            </Stack>
                        }
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={spaghetti}
                        alt="Spaghetti Bolognese"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Everyone needs a basic spaghetti bolognese recipe that still tastes great, no matter how simple. Get that depth of flavour by cooking the sauce very gently until it’s super rich. This spag bol is designed to be a low cost recipe..
                        </Typography>
                        <Link to="/recipes/spaghetti">
                            <Button>Check the details!</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>                <div className='recipes__card'>
                <Card>
                    <CardHeader
                        title="Spaghetti Bolognese"
                        subheader={
                            <Stack direction="row" spacing={1}>
                                <Chip sx={{backgroundColor: 'red', color: 'white'}} label="Meat" />
                                <Chip sx={{backgroundColor: 'orange', color: 'white'}} label="High Carbs" />
                            </Stack>
                        }
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={spaghetti}
                        alt="Spaghetti Bolognese"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Everyone needs a basic spaghetti bolognese recipe that still tastes great, no matter how simple. Get that depth of flavour by cooking the sauce very gently until it’s super rich. This spag bol is designed to be a low cost recipe..
                        </Typography>
                        <Link to="/recipes/spaghetti">
                            <Button>Check the details!</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>                <div className='recipes__card'>
                <Card>
                    <CardHeader
                        title="Spaghetti Bolognese"
                        subheader={
                            <Stack direction="row" spacing={1}>
                                <Chip sx={{backgroundColor: 'red', color: 'white'}} label="Meat" />
                                <Chip sx={{backgroundColor: 'orange', color: 'white'}} label="High Carbs" />
                            </Stack>
                        }
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={spaghetti}
                        alt="Spaghetti Bolognese"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Everyone needs a basic spaghetti bolognese recipe that still tastes great, no matter how simple. Get that depth of flavour by cooking the sauce very gently until it’s super rich. This spag bol is designed to be a low cost recipe..
                        </Typography>
                        <Link to="/recipes/spaghetti">
                            <Button>Check the details!</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
                <div className='recipes__card'>
                <Card>
                    <CardHeader
                        title="Spaghetti Bolognese"
                        subheader={
                            <Stack direction="row" spacing={1}>
                                <Chip sx={{backgroundColor: 'red', color: 'white'}} label="Meat" />
                                <Chip sx={{backgroundColor: 'orange', color: 'white'}} label="High Carbs" />
                            </Stack>
                        }
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={spaghetti}
                        alt="Spaghetti Bolognese"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Everyone needs a basic spaghetti bolognese recipe that still tastes great, no matter how simple. Get that depth of flavour by cooking the sauce very gently until it’s super rich. This spag bol is designed to be a low cost recipe..
                        </Typography>
                        <Link to="/recipes/spaghetti">
                            <Button>Check the details!</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
                <div className='recipes__card'>
                    <Card>
                        <CardHeader
                            title="Spaghetti Bolognese"
                            subheader={
                                <Stack direction="row" spacing={1}>
                                    <Chip sx={{backgroundColor: 'red', color: 'white'}} label="Meat" />
                                    <Chip sx={{backgroundColor: 'orange', color: 'white'}} label="High Carbs" />
                                </Stack>
                            }
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={spaghetti}
                            alt="Spaghetti Bolognese"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Everyone needs a basic spaghetti bolognese recipe that still tastes great, no matter how simple. Get that depth of flavour by cooking the sauce very gently until it’s super rich. This spag bol is designed to be a low cost recipe..
                            </Typography>
                            <Link to="/recipes/spaghetti">
                                <Button>Check the details!</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
                <div className='recipes__card'>
                    <Card>
                        <CardHeader
                            title="Spaghetti Bolognese"
                            subheader={
                                <Stack direction="row" spacing={1}>
                                    <Chip sx={{backgroundColor: 'red', color: 'white'}} label="Meat" />
                                    <Chip sx={{backgroundColor: 'orange', color: 'white'}} label="High Carbs" />
                                </Stack>
                            }
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={spaghetti}
                            alt="Spaghetti Bolognese"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Everyone needs a basic spaghetti bolognese recipe that still tastes great, no matter how simple. Get that depth of flavour by cooking the sauce very gently until it’s super rich. This spag bol is designed to be a low cost recipe..
                            </Typography>
                            <Link to="/recipes/spaghetti">
                                <Button>Check the details!</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
                <div className='recipes__card'>
                    <Card>
                        <CardHeader
                            title="Spaghetti Bolognese"
                            subheader={
                                <Stack direction="row" spacing={1}>
                                    <Chip sx={{backgroundColor: 'red', color: 'white'}} label="Meat" />
                                    <Chip sx={{backgroundColor: 'orange', color: 'white'}} label="High Carbs" />
                                </Stack>
                            }
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={spaghetti}
                            alt="Spaghetti Bolognese"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                Everyone needs a basic spaghetti bolognese recipe that still tastes great, no matter how simple. Get that depth of flavour by cooking the sauce very gently until it’s super rich. This spag bol is designed to be a low cost recipe..
                            </Typography>
                            <Link to="/recipes/spaghetti">
                                <Button>Check the details!</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>                <div className='recipes__card'>
                <Card>
                    <CardHeader
                        title="Spaghetti Bolognese"
                        subheader={
                            <Stack direction="row" spacing={1}>
                                <Chip sx={{backgroundColor: 'red', color: 'white'}} label="Meat" />
                                <Chip sx={{backgroundColor: 'orange', color: 'white'}} label="High Carbs" />
                            </Stack>
                        }
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={spaghetti}
                        alt="Spaghetti Bolognese"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Everyone needs a basic spaghetti bolognese recipe that still tastes great, no matter how simple. Get that depth of flavour by cooking the sauce very gently until it’s super rich. This spag bol is designed to be a low cost recipe..
                        </Typography>
                        <Link to="/recipes/spaghetti">
                            <Button>Check the details!</Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>





            </div>
        );
}
