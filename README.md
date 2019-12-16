## `Motivation`

* This project is very special to me because it is a gift to my mother!!! My biggest motivation in life and also in this project is my mother. She has been one of the most successful pharmacists in Turkey for about 30 years. She loves her job and loves to help people. That's why she is very good at her job. In this project, I tried to combine my coding knowledge and love of my mother. I created a website for her pharmacy!

## `Challenges`
* I had a hard time making my photo album responsive. The pictures were getting smaller but they were not changing their locations.
* I also had hard time figuring out the layout of my album. I was not sure where to put each section. 
* I struggled with what to write on this readme file but here we are :) 
* I overcame my challenges by spending more time on the project and trying different things to make it work.
  
## `Goals`
* My first goal on this project was to create  website to my mother!
* My second goal is to practice responsive grid and css tools.I tried to have 3 different layouts and that helped me to understand the grids better.

## `Code`
* I mainly used CSS in this project. 
* I also used javascript to make adding and removing to the already existing list.
* The code I used for grid areas :

``` 
grid-template-areas: 
        "hd01 hd01 hd01 hd01 hd01"
        "nv01 nv01 nv01 nv01 nv01"
        "pc01 pc02 pc03 pc04 pc05"
        "pc06 pc07 pc08 pc09 pc10"
        "pc11 pc12 pc13 pc14 pc15"
        "pc16 pc17 pc18 pc19 pc20"
        "ft01 ft01 ft01 ft01 ft01"
    ;

```
* Layout codes used:
```@media (min-width : 501px) and (max-width:800px) {
    
    #photo-album {
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-auto-rows: repeat(8,1fr);
        grid-auto-flow: dense;
        height: 100vh;
        width: 100%;
        border: black solid;
        font-size: 18px;
```





