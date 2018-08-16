this is a little fun repo

i try here to expose an api form .net core 2.1  
then cosume it with a react app  
the telos of this approach is to keep everything in the visual studio environment  

to to it navigate clone the repo  
navigate into the CORE_2_1_API folder, press start in debug mode
there sould be, if WINDOOFS world is wokring correct, an API exposed to ```localhost:4400/api/todo```
there is also a swagger documentation on `localhost:4400/swagger`  
yes, its a small API, just for testing purposes

then have the visual studio npm taskrunner installed, adjust node via PATH to your needs in taskrunner settings  
navigate into the folder react-app
either use bash (better way) or the taskrunner, press/click the install script  
then ```npm run start``` 
get served
have a lifewatcher that autoreloads your changes on save provided to your thingy

have fun with it  

8/16/2018
today i implemented a folder that makes it possible to have shared components in multiple projects  
its in the `shared` folder and there add your component under `/src` export and register it in `index.js`  
run `npm run build` to build.   
consumption of shared components would like the following
```
const shared = require('../../shared/lib/index');
const BoilerplateComponent = shared.BoilerplateComponent;
const OtherComponent = shared.RandomComponent;
```

my the code be with you
![funny and true](https://pics.onsizzle.com/2-raskreddit-u-glitteredalien-6h-nsfw-whats-your-better-than-sex-34726053.png)