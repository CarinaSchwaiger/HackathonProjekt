import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function Topics() {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
             <Grid item xs={12} md={6} lg={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://www.roberthalf.de/sites/roberthalf.de/files/legacy-images/fotolia_73063309_s_smalltalk_0.jpg"
                        title="Smalltalk"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Smalltalk
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lerne dich über das Wohlbefinden deiner Gesprächspartnerin zu erkunden und häufige Fragen mit Bravour zu meistern.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Mehr Informationen
                    </Button>
                    <Button size="small" color="primary">
                        Lernen
                    </Button>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://www.ltur.com/wp-content/uploads/2020/03/Blog_Heroteaser_Sicher-reisen_1600x550_03-1.jpg"
                        title="Smalltalk"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Reisen
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lerne über deinen Sommerurlaub alle Details von der Farbe des Wassers bis zum Geschmack deines Lieblingscocktails zu berichten.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Mehr Informationen
                    </Button>
                    <Button size="small" color="primary">
                        Lernen
                    </Button>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUQEBIVEBAQFRUVFRUPFQ8QFQ8QFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGisdHR0tKy0tLS0vKy0tLS0tLS0tLS0tLSstKy0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EADsQAAICAQIDBQYEBQIHAQAAAAECABEDBCEFEjFBUWFxgQYTIjKRoRRCscEjUmJy0aLwM0OCg7Lh8RX/xAAYAQADAQEAAAAAAAAAAAAAAAAAAQIDBP/EAB8RAQEAAgIDAQEBAAAAAAAAAAABAhEDEhMhUTFBYf/aAAwDAQACEQMRAD8A8uxwwEEBDLO9zbOBJgRgJMCPQ2g6yNQ/LIcscJECTAjgSQEehslEmFiUQqrHotohYRVjhYRVgSIWEVZJVhsaQCCpLGLHJqks4scVGzY8cv6fHGw45o6bT3M8qqFhxS4mGG0+nmhp8ExtaxWxabaEOmmnh00K2lkbVpkrpo5001/w8b3MC0w3wwD4ZtZdPKmbDDZMfMkqvjmpnxVKbJLgZuYSq6TQypK7pNINs90gGxy7kEAwlFtTyJKziXcsrssqC5K/LFC1FAtubAhEiCyYWPTPaYEkBJIJMLHoIgRikMFkwsZbVgskqw/uo4xxltBUhFWSCQy4T3H6GA2gFhFSTCQqJAtorjhkxwiJDLjiG0MeOW8SRY0lvEkm04ngxzX0aVKWDHNfSJMc60xW8WO5o6XT3BabFNnSYJha2iWn0ksnReEvadKENM1aY7aOVsmCdAy3KWowypkGFnxSjlxTbz45mahSI5U1kanHMvKs19SJn5VmuKazmxyvkSaDCVcqS5UMzKkrOk0cqSvkSXEs9kgmSXXxwLJKJUKRSxyRQNyyrCBYRUkwkpKGMQwESpCrjjJASQhFxQgww2QIk1EKMMIuKPZAqkKiQy4oVccWwCuOFXHDpjh0xRbIDHjh0SHTFDpiiuR6CxJLeJZJMcPjxyLVSC6dJsaSUMCTR08xyrXFr6Qzc0ZEwNM019K8xrWVrxSGJ7EnJWUi52id6ld9WB2XAKmry+AmPqWuX9bnsk1Uy8tnpvKiao51lHMk0cjSnlmkqKoukrZFl51ld0lbTpnukC+OaDY4F0ldhpmvjgGxzSfHAPjlTJFih7uKWzjjx9hpyQxwgxwq44VccO5aAGOEXHLC44RccO5aARIZUhVxwq44d4NUFccKuKFXHDIknuOoK4YRcMsKkKqQ8g6q64YZMMOqQqpJvIfQFccMuOEVIREi8h9DJjh8eOOiwyJJua5gJhWXcIlbGJZSRc1TFewtUvYMsy0MsY3k9l6bmHUVC/iZkY8sn76LZ6X8uolLLlgneBdobGjZnlR3I6GTcyu8Ow0g7mqvaV2EMwg2EfYuoDrAssssIBxDuOquwgnWWGEEwj7jqrOkCyS0wg2EO6eityRoeooeQdHKKsIqySmzXunN91fqDCslfNhyAd5ND0+ISO9X44iqwqpBHUKBsj1/cwP1uHXV7Ae6sHp/EQGu4/F+sO1HSJIu9dv6woSvDzjoBdjTYz237zGp+tQ34hHFNjU1vy+9wOPA7kRd6fjiAWERYfDqsRAACjlPRMiGvPkbaXlyIFDkDlPdz5P0Unvk3ky+KnHioLjPdCriPdLLcV04HxGh03x5Rv3brBtxvRILLdR0VNz9ods7/B0w+mXEYVcRmLn9ssKH+DhLeOQgA+i9Jm5vbLUE/CMaD+lQxHq1y5hyVFuEdguMwyYj3TmOGe2WfoyJlY/CC3u8YvxO36zq+G65noPiWq+JsWTCN+oPKGNd3zSc5nj+rx638TTA38p+hhlwN/KfoZaK4E6hFB629nzIgsH4ewE9zZ7OffbpdAgdsy7VfWHXC38p9QYUKQaIonshAiEkc247ebARfkRdjb7SR0iA3sDsb93jYXv2jyh2PrEkQ9x+8OmNuwH6GUsWbE/S2btVcYDUO/sl7T41A2VqG/xigPqNorlRqCLjbuMmMbd0CdXp1sF1vqf998li4rpqNvVV3XX+zDeQ1Eyh/wDpAg2Q90DqOKoD/CZcg7QxKm/sCJVbjaFLK131zcoN9wO4j1kPS22MwTYz3H0B/wASv/8AqqOmTEBW+2Tp3DeSOtyv8gxOL6jm2+8VmR+jthPd9xBvgbu+4g8mtyk/GgX+4Z6P06yWT31ADkU9tKW9KJBuL39Hr4i2mbu/SAfTN3H7S6gyDZvXlxso9DvBNletlZgO2lG//UIbp6ikdKx7D94NtK0t5dTkFcuI5K6m0+nwj9ZVz6vKSbwEEVfMuCq9ckN5FqAvpT3j6wf4QntH1uW11ZIrlOOiObk9wa/1H7CDy8QN0pQkGiCUG3Z1b9PtDeQ1irfhD3j6xoc8QPb7sHxY/wCY8W8xrFwWj4iFNhVxnvUCyf2ms3HkVPiNjrvR38p517498cZj3zsvDKw8jsm43pSSfdAsd7AqWF41jyCmQE+IE4hMglrFrgvSF44Jm7xdVi5LIA/eG0GbGRzMuREUblnoOT2KvYPGedPxFz1Y/wCIm4i5FFjXdcXho8j0tuJ6MbszhtvzlyfA71UNw3imFrLPXdZ/WeUjKT2w6agjtj8E+jyvUxo9HkUrs5P5mJ5vRhOc49wBhQwKeUGtgWJB7SZzmk17IbBmxj4xmehzn0imOWN9UbxyVdP7Nah15uXlo1TdSO/ylbUcIzJuUYi62B3PgJ3XCcmUi7rbr1MNrMeZkIXIA5NAkih6dsXny2fimnCJwPPQL43QHpeLUH/xQxlxY1FjKCwNcvLkU/Wp2um4RqhuM6GjYCoAR5HmoSrxvhaZHvUuuny3sa5myITt8Kj7m5U5t3VTeLUZ/DuH4smP3jZmUAG6xuQpAsgsaBPkZq8POjwrzOzO118QXlYd4UE1t4yGD2OxugbDnbevmxgV32LkNT7G5Fr3edXLXQcBNh1IPMR3SbljfXZUln8XMftVysVxY8eLGenzWPE8vX6Tbw+1WJgQCUIHVS258LB2nN6f2Iyn58yLfUgc1ffeaWD2MCnfOduh93sfTf8AUyMvF9VO7Qf2iJ/56L/23JI8SV+9TL437Rsx5Ec8gFWNua+vQDb0hNT7NOFNai/PFko0O03QnL8Q0LYm5Wa6rdVfl38SBK48cLfRZ3KRZOuJ7ZJNbvM1cBPb16bE83lXWWsXC8pFhH7PyZO3p2Tf0z9t3TahWG5f/oUN+pEsDW4F685HcyA7+jiZml4Nn2B5kvtIer8xtNPHwTkYM7hqK7F2AY9o3T9LmOWWP1clXsHGtOdhhvxGLCD9Sxl78YmMA8jAHaqwJ9fhgHbCiHHjLliN1xEHIL7OZjdeQmM3DMyUynPix9eUK2VvPlDEVMvV/wAae46dcq8pdFBPaFK2fDmFGpHMvMb5uQD+Vc3MPUNvObfSu1fFqWs9Hxla+2w867ZZ0WN0293nY7kjIE5SegA36fSTcdf09r2ryqpFZdT52VH+sSjq9a9gDJm8aRGvxJOw+0t6TTnIS2VGx8l0Sz1y/wBpUfvXZG4g+JRYzKlGrLglR4XYH03in6aomfIBfMzE3u+PCT9B+0Zff5B/Dy5ifBVxi/CzsPIyzg1Qql1HvC/RufAzeShQD3bSzjK8pstkI2Y2nXuq6it0GBl1mpxUHfJj36scDg+he5Yw8Qye7Dh3CkkGlRQDe9lARLubTYyDzYnoDZVT3hN3vQBEGHVwF5MqgbAHC4I+i0ojtl/g0CbO/wCIyi+5bHoe0RS6um70N/1ZaPrvHk7GnhWXTuvzKRB3PSuJezOHOAUPIRttRFTm+IeybYxYbp37g/TpO3Hllc947HNhoi8NlwBRR3J7uzzlflmsZ0/NJBpHljhZQEDSStJLiHa1ehlnDiX+V3Y9AFqz3dpMm0aQxNN7heiyPRVSf3lf8VkxqqjTpga9mdQhO3fkm5wT2l1CgF1fJjPcKB8qA39fSZZ5XXppjJtu6DFqUXfHyqKu9yB30JW12T8wyhhva0w5P1+80tF7R5G/5RRCfmzsqAD1Nn0ljT8WYMd1YHf4GfIKvwFD6Tl9yt2Nw/XYkQ+9V2JNDlU19ZoaTHjzNzDSA71eUcx+jX3zYyakODZIB7OyVQyY9wa8Szb+lxbGl3ScLRD8OPHi3/JjXf17I+rOZCeTGXVe1Wrm8luUsHGk7WG57x+k0NJrvenY0vf3xav9Niv7SOLDY8go0bDHeJOOuTy+75BV3mdkvuoV4Tpnx46B25h2k3A5MeN/nQA9NxRHlHufC1XNZ+I6rJmC4nGNCF+Ql6u9/HYTp9FpG5Qr5jqAfn98o5StdFF7fWRGixpbAb9569K/aBza5AhF77x27/BpslVCkOw5P6S4Ppvtt3SGiw6UhgoI5hVgm68+s8+4nxJ8YoPYJ7eyUMHtI+Mdd5U47r0Vyeptp8Y+EMWrcBzz9fOVMnDcNglUBHQqqqfsJ5wfajMzcwNQ7cdyv+YekPHYO0egNpuX/hFV8K2rtoCpXyYWBJ5wWPbQ2vtPN2ev1mNo+L0g5m3mjg4yrL2f4mdlVtV1B1hfYF+UbOrviU7/AJxsCfKVhqdSrB82ZFxCwfduvzeaKa8j3dZpalzkFdVP9RWvKZ34BveB1ykWfiBKMCB0F9vqI5RpT13H/jCHNmxoykKpShk/lC5T8QPj1PhMrUcayI5xHHnY2DTOeU1df8RWJH6906bVYmawQgXoSz0T5VM5uF0RyaZmXJ+csMoPZtZFbb+nbKxyx+FZUcGr9yhyOh59jz5MQ5k8OZVtvNqlzScSLDmx27ML+EKFBoVYCg/ePh4QMRpFx4m/rq27/iJMsZ8CiwA2RhuQHzKPQ/KJFspxWy8Q1iqD+HV/7cgXl8SGrrM7PrdQytkKDTkgjmORDy+pY1v1od0u5daMILNgYVts3PQ89xMfi/tHaVjxAf3BWP0qPGb/AIVaZzOd+YdB1wnJvW/xEb+cU5ZPxhAI0zUen8KtvAEdIpXT/YXYXHxal2IB74ReIgghzd+M4v8AFmquG0zMxoTW8ae7dz6HSM3y2T15T0MZ/Z3AAT8W/QE/eVsGKj13+0tO2Rr/AItAdg2H2i3Z+Uanw2L2bwjc8zeAIN+Ihm4VovlPMjr2WDv4ioPFhUAF8zAdAVA+ksPwIZF5sOUO39WxvzHWLtf7RqfF/RcMxFOUEk9QbAbwom6lTNqcScwY50cH5y/MSartHTr0hNJp9RiIVsfW6NitutnoOvbKfHNFkX4svIg6/OhJ8gDZPbJnu/p38aHBuOPkUoXOxHLaDISO82QL8Zv4zlI/hnb+sgA+Q7Jz+jfStiPIzoy18Tsvxegme3Ekxk78xPaCf3hcd30JdR0uu03NXvVAINmuhPjI5+I4sQAB9F6KP8zi9Zxtj0Mzc/EWYV/s+cvHiv8ASvJHXcS9qb+FNh3mrmDn4uzHqZhnJcdWm845Gdztb+k1DMetCdJj40MONVJNDffq3/qcXi4gVFDugMupLGyZN49/pzPTtx7WO+RVxgdQBf7zqNRrMoVQwDbEnl/l77nk+g1ZxuCO+dVruKO+LZgAaJomz4XM8+P3NLxz+uo4rxpEQhG+KvS6nM6zjJCim3/ecxqdeWPWAbUE7S8eLSbyNDUa8sdzAFyZVDSTZpppGxvfEQuPVkdso+8jqwjsG2xg17dCdpscK1BLWfl7py+Npq6LUV2zHPFpjXoGi1QahtXbNQ51C7Cz4bV5DpOK4dqgDZadZw1wVDP8Q7On6Tlymmso+LmfxHWwAPQwpzofhqqFGiRt6RZeJqp5V69wEp6zVKwNjejvdERaMTUClvESfJjt6E0ZjDNlqnPN4m0Yb+dTM0/FKyFea9+w7fWaObKW6feOzRbZfGOJ8mxBbz2seY3kOHcZwghuVcbDpz/EfQ1a+cFrdM18x+Kt6rmH0mbg05OVS2L4btiObbfbbp6VLkliba2dTjz5HLpi5lY2CmocA+QsRTax8RQACm27hGk9qenkQ+DqPrIjVEdNvKdBq9AMnnMTU8PZT0nVMpWNlgf41u+ONc1VZo93bA5cBUXAGXqJ3VwaiX9LxZkUqCaPWpic0lzxWSiVv632iyZFCE0q1sPCZeo1rubZie65UG5odsm+PlO5Ff0m45jJ+C20T35rrEMkA1dh+sbmlaIZngyZEtGJjhJR7kLj3AJgySmCBkw0YWceQfms+RqTfOdwtgHsu5UDSQeGjFvvi5oPnjc0CF5ouaC5ouaBi80QeC5orgFkZofDqN5RUyaNJsG3TcL1tsL+Ijs2nZaDW2OhUr38tHyE8w0+qKNYNGX14ww3LGYZ8e76a45us13tWEBAQFiaNgTmdVxt3uyaPZfZMvWawOdhQ/WVS8rHjkK51qrqyDYM2eH8dI2becjzwmPNUeWEpTLT0PT8QR+p+hmxpqcdRXjPOOH6oDwPjuJ2PBdcpFGgfDvnNnhprjltpNh32MUC+cX1ikKcRg1kPmYMJlYJfx4yR1qa2M5VDW4gaA6CA1mdCvKMSCu0Df6zX/BC9zt4Sep0mKvlA8RtKmcTY5H3Zk8aAG2F+G81M+FV85QyETaZbRYBkFGxsIMtHd4O5aT3Fca41xg8cNIXFcAJcVyHNFcAJce4O5JWgEwZK5DmEViAEuK4MtFcDEuK4O49wCdxwZC4rjAgMkGgrj3AC80bmkLiuIJXFcjca4gncmgg1hQYjFRpp6HWFT1mWsNjeRlNqjpl1tjcxTGTU7biKZdF9lXFqalldbtMP3skMkvqjbYOt8ZXza4ntma2aDbJCYwtrOXUEyoxJ6xgTGYzSJIiR5o1xpQPFIlpG4EmTGuRuNcDTuK5C44MAmDHuQuPcZJ3HuQuK4BK49yAjwNO4rkbiuAEBj3BXHuAEuPcFce4AW4rg7iuAEuOIMQixAQSQg7kgYjFBhEMADCrFTWgw7o8AIpJsu4zZIoo0hl5HnjxRg65IxeKKMkbjXFFAGuK40UAe4o0UAeKKKAKODFFGD3FceKAK4rjxQBXFcUUAe4oooA8VxRQBXJCNFACrHuKKI0hJXFFEE1hliiiM/NFFFAP/9k="
                        title="Smalltalk"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Wetter
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Setze eine Wolke, beschreibe das Wetter auf das Grad genau und erfahre ob du heute einen Regenschirm benötigst.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Mehr Informationen
                    </Button>
                    <Button size="small" color="primary">
                        Lernen
                    </Button>
                </CardActions>
            </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://lh3.googleusercontent.com/8s9hrPNcqlxHzC0IF2zvX_QhDNFHbIms2UAgFLr6zPqGLMj-ndbgqf1Wz_VWBRdpaQ=h500"
                        title="Smalltalk"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Essen
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Erfahre alles über verschiedene Gewürze und Geschmacksrichtungen und lerne dein letztes Essen perfekt zu beschreiben.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Mehr Informationen
                    </Button>
                    <Button size="small" color="primary">
                        Lernen
                    </Button>
                </CardActions>
            </Card>
            </Grid>
        </Grid>
    );
}