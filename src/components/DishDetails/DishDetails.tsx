import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import './DishDetails.scss';
import Button from "@mui/material/Button";
import spaghetti from '../../assets/spaghetti.png'
export const DishDetails = () => {
    const spahettiRecipe: string[] = [
        'Heat a large saucepan over a medium heat. Add a tablespoon of olive oil and once hot add the beef mince and a pinch of salt and pepper. Cook the mince until well browned over a medium-high heat (be careful not to burn the mince. It just needs to be a dark brown colour). Once browned, transfer the mince to a bowl and set aside.',
        'Add another tablespoon of oil to the saucepan you browned the mince in and turn the heat to medium. Add the onions and a pinch of salt and fry gently for 5-6 minutes, or until softened and translucent. Add the garlic and cook for another 2 minutes. Add the grated carrot then pour the mince and any juices in the bowl back into the saucepan.',
        'Add the tomatoes to the pan and stir well to mix. Pour in the stock, bring to a simmer and then reduce the temperature to simmer gently for 45 minutes, or until the sauce is thick and rich. Taste and adjust the seasoning as necessary.',
        'When ready to cook the spaghetti, heat a large saucepan of water and add a pinch of salt. Cook according to the packet instructions. Once the spaghetti is cooked through, drain and add to the pan with the bolognese sauce. Mix well and serve.',
    ];
    const spaghettiIngredients: string[] = ['2 tbsp olive oil', '400g/14oz beef mince', '1 onion, diced', '2 garlic cloves, chopped', '100g/3½oz carrot, grated', '2 x 400g tin chopped tomatoes', '400ml/14fl oz stock', '400g/14oz dried spaghetti', 'salt and pepper'];

    return (
        <div className='dish-detail'>
            <div className='dish-detail__ingredients'>
                <span className='dish-detail__ingredients--title'>Ingredients:</span>
                <List className='dish-detail__ingredients--list'>
                    {spaghettiIngredients.map((value) => {
                        const labelId = `checkbox-list-label-${value}`;

                        return (
                            <ListItem
                                key={value}
                                secondaryAction={
                                    <Button className='substitute-button'
                                    >Substitute</Button>
                                }
                            >
                                <ListItemButton role={undefined} dense>
                                    <ListItemIcon>
                                        <Checkbox
                                            edge="start"
                                            tabIndex={-1}
                                            disableRipple
                                            inputProps={{ 'aria-labelledby': labelId }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText className='list-item-text' id={labelId} primary={`${value }`} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
            <div className='dish-detail__image'>
                <img src={spaghetti} className='dish-detail__image--details' alt="Spaghetti"/>
            </div>
            <div className='dish-detail__recipe'>
                <span className='dish-detail__recipe--title'>Recipe:</span>
                <div className='dish-detail__recipe--list'>
                    <ol className='recipe-element'>
                        {spahettiRecipe.map(el =>
                            <li key={el}>{el}</li>
                        )}
                    </ol>
                </div>
            </div>
        </div>
    );
}