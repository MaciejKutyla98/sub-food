import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SpaIcon from '@mui/icons-material/Spa';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import SetMealIcon from '@mui/icons-material/SetMeal';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import KitchenIcon from '@mui/icons-material/Kitchen';
import KayakingIcon from '@mui/icons-material/Kayaking';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import EggAltIcon from '@mui/icons-material/EggAlt';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import BreakfastDiningIcon from '@mui/icons-material/BreakfastDining';
import TakeoutDiningIcon from '@mui/icons-material/TakeoutDining';
import WhatshotIcon from '@mui/icons-material/Whatshot';

import './Constraints.scss';

const Constraints = () => {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className='constraints-wrapper'>
            <List
                sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', padding: '24px'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader sx={{fontSize: '24px', color: '#006400'}} component="div" id="nested-list-subheader">
                        What diet do you prefer?
                    </ListSubheader>
                }
            >
                <ListItemButton>
                    <ListItemIcon>
                        <LocalFloristIcon />
                    </ListItemIcon>
                    <ListItemText primary="Vegetarian diet - the best choice when you don't want to eat meat!" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <SpaIcon />
                    </ListItemIcon>
                    <ListItemText primary="Vegan diet -  abstaining from the use of animal products." />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <SetMealIcon />
                    </ListItemIcon>
                    <ListItemText primary="Gluten free diet - excludes foods containing gluten." />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <RiceBowlIcon />
                    </ListItemIcon>
                    <ListItemText primary="Lactose free diet - excludes foods containing lactose." />
                </ListItemButton>
            </List>
            <div className='breaker'>~</div>
            <List
                sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', padding: '24px'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader sx={{fontSize: '24px', color: '#006400'}} component="div" id="nested-list-subheader">
                        What about nutrition?
                    </ListSubheader>
                }
            >
                <ListItemButton>
                    <ListItemIcon>
                        <KitchenIcon />
                    </ListItemIcon>
                    <ListItemText primary="Different calories diet - choose how many calories you want to eat."/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <KayakingIcon />
                    </ListItemIcon>
                    <ListItemText primary="High carbohydrate diet - recommended if you need more energy."/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <SportsGymnasticsIcon />
                    </ListItemIcon>
                    <ListItemText primary="High protein diet  - the best diet for strength training."/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <EggAltIcon />
                    </ListItemIcon>
                    <ListItemText primary="High fat diet - recommended if you have problems digesting carbohydrates."/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <RestaurantIcon />
                    </ListItemIcon>
                    <ListItemText primary="High minerals and vitamins diet - recommended if you have their deficiencies." />
                </ListItemButton>
            </List>
            <div className='breaker'>~</div>
            <List
                sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper', padding: '24px'}}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader sx={{fontSize: '24px', color: '#006400'}} component="div" id="nested-list-subheader">
                        Any preparation constraints?
                    </ListSubheader>
                }
            >
                <ListItemButton>
                    <ListItemIcon>
                        <BreakfastDiningIcon />
                    </ListItemIcon>
                    <ListItemText primary="Do you have an oven?"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <WhatshotIcon />
                    </ListItemIcon>
                    <ListItemText primary="Do you have a stove?"/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <TakeoutDiningIcon />
                    </ListItemIcon>
                    <ListItemText primary="Do you have a pot?"/>
                </ListItemButton>
            </List>
        </div>
    );
}


export default Constraints;