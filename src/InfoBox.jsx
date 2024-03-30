import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import "./InfoBox.css"

export default function InfoBox({info}){
    const INIT_URL= "https://plus.unsplash.com/premium_photo-1681550093390-14477e7b196a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1613416721396-6565d7b3dcb2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const cold= "#1d71f2";
const sun= "#FFCD00";
const rain="#636d83";

    return (
        <div className="InfoBox">
        
        <div className="cardContainer">
            <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                sx={{ height: 250 }}
                image={(info.humidity> 60 &&info.temp>20) 
                    ? RAIN_URL:
                    (info.temp>30) 
                    ? HOT_URL: 
                    (info.temp<10)?
                    COLD_URL
                    : INIT_URL}
            />
            
            <CardContent>
                <Typography component="div" id="cityName">
                {
                   info.humidity > 70 
                   ? <ThunderstormIcon/>
                   :(info.temp>15 
                   ? <WbSunnyIcon/>
                   : <AcUnitIcon/>)
                }
                {info.city}

                </Typography>
                <Typography variant="body2" component="span" id= "description">
                   <p style={{color:"#a0153e"}}> <ThermostatIcon/> Temperature = {info.temp}&deg;C</p>
                   <p style={{color:"#008194"}}> <WaterDropIcon/> Humidity = {info.humidity}</p>
                   <p style={{color:"#003c54"}}> <AcUnitIcon/> Minimum Temperature = {info.tempMin}</p>
                   <p style={{color:"#f69000"}}> <WbSunnyIcon/> Maximum Temperature = {info.tempMax}</p>
                   <p> The weather can be described as <i style={{color:"#226ba3"}}>{info.weather}</i> and feels like  <i style={{color:"#226ba3"}}>{info.feelsLike}&deg;C</i></p>
                </Typography>
            </CardContent>
            
            </Card>
            </div>
        </div>
    )
}
