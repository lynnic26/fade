## fade in and fade out effects rewrited in a jquery plugin

## Getting Started
```
$('#domId').fadeBack();
```
```
$('#domId').fadeAway();
```

```
$('#domId').fadeAway({
    toOpacity: 70,
    duration: 300,
    delay: 30
});
```


## Usage
heres some options , each of which has a defaults value

| Name                            | Default                                         | Description                                                                                                                                                                                                                                             |
|---------------------------------|-------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| toOpacity                       | 100 with fadeBack and 100 with fadeAway         | the value of dom opacity  
| duration                        | 200                                             | how long the effect lasts
| delay                           | 20                                              | frequency 
| callback                        | null                                            | callback function when effects end
