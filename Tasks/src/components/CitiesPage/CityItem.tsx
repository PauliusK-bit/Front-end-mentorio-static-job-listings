/* eslint-disable react/prop-types */

import { useContext } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { CityContext } from "./CitiesContextProvider";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function CityItem() {
  const cities = useContext(CityContext);

  if (!cities || cities.length === 0)
    return <p>There are no cities at the moment.</p>;

  return (
    <div className="cities">
      {cities.map((city, index) => (
        <Card key={index} sx={{ minWidth: 275, mb: 2 }}>
          <CardContent>
            <Typography
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              City Details
            </Typography>
            <Typography variant="h5" component="div">
              {city.name}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              Population: {city.population}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              {city.name} is located in {city.location.continent},{" "}
              {city.location.country}.
            </Typography>

            {city.isCapital && (
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                Capital City
              </Typography>
            )}

            <Typography variant="body2">
              {city.touristAttractions.length > 0
                ? `Main tourist attractions: ${city.touristAttractions.join(
                    ", "
                  )}.`
                : "No major tourist attractions listed."}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default CityItem;
