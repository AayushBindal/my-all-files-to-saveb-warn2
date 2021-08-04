class loopFood{
    foodMaker(){
        var foodGroup;
        foodGroup = new Group();
        for(var i = 0; i<displayWidth; i += 20){
            var food = createSprite(i, 25, 5, 5);
            food.shapeColor = "yellow";
            foodGroup.add(food);  
            console.log(food.depth);
            // if(foodGroup.isTouching(pacman)){
            //     foodGroup[0].destroy();
            // }
        }
        for(var i = 0; i<178; i += 20){
            var food = createSprite(i, 50, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 69; i<190; i += 20){
            var food = createSprite(152, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 0; i<134; i += 20){
            var food = createSprite(i, 175, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 90; i<159; i += 20){
            var food = createSprite(44, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 58; i<108; i += 20){
            var food = createSprite(i, 109, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 170; i<1372; i += 20){
            var food = createSprite(i, 170-6, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 17; i<1227; i += 20){
            var food = createSprite(i, 650+5, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 176; i<641; i += 20){
            var food = createSprite(195, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 18; i<183; i += 20){
            var food = createSprite(i, 406, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 18; i<183; i += 20){
            var food = createSprite(i, 459, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 18; i<183; i += 20){
            var food = createSprite(i, 435, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 40; i<568; i += 20){
            var food = createSprite(540, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 212; i<675; i += 20){
            var food = createSprite(i, 616, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 694; i<1229; i += 20){
            var food = createSprite(i, 619, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 176; i<570; i += 20){
            var food = createSprite(482, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 180; i<572; i += 20){
            var food = createSprite(432, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 550; i<943; i += 20){
            var food = createSprite(i, 473, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 556; i<858; i += 20){
            var food = createSprite(i, 318, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 215; i<419; i += 20){
            var food = createSprite(i, 347, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 215; i<419; i += 20){
            var food = createSprite(i, 503, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 50; i<158; i += 20){
            var food = createSprite(217, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 176; i<337; i += 20){
            var food = createSprite(248, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 50; i<158; i += 20){
            var food = createSprite(236, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 358; i<483; i += 20){
            var food = createSprite(265, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 519; i<600; i += 20){
            var food = createSprite(296, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 548; i<593; i += 20){
            var food = createSprite(245, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 41; i<150; i += 20){
            var food = createSprite(472, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 40; i<143; i += 20){
            for(var j = 689; j<1365; j += 60){
                var food = createSprite(j, i, 5, 5);
                food.shapeColor = "yellow";
            }
        }
        for(var i = 177; i<379; i += 20){
            var food = createSprite(904, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 182; i<380; i += 20){
            var food = createSprite(975, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 353; i<563; i += 20){
            var food = createSprite(877, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 297; i<601; i += 20){
            var food = createSprite(1151, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 325; i<426; i += 20){
            var food = createSprite(320, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 177; i<598; i += 20){
            var food = createSprite(1208, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 430; i<564; i += 20){
            var food = createSprite(927, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 590; i<682; i += 20){
            for(var j = 528; j<598; j += 20){
                var food = createSprite(i, j, 5, 5);
                food.shapeColor = "yellow";
            }
        }
        for(var i = 714; i<845; i += 20){
            for(var j = 528; j<598; j += 20){
                var food = createSprite(i, j, 5, 5);
                food.shapeColor = "yellow";
            }
        }
        for(var i = 306; i<415; i += 20){
            var food = createSprite(i, 560, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 563; i<848; i += 20){
            var food = createSprite(i, 190, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 920; i<1139; i += 20){
            var food = createSprite(i, 385, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 978; i<1128; i += 20){
            var food = createSprite(i, 437, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 877; i<998; i += 20){
            var food = createSprite(i, 564, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 445; i<548; i += 20){
            var food = createSprite(990, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 445; i<548; i += 20){
            var food = createSprite(1051, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 1050; i<1133; i += 20){
            var food = createSprite(i, 563, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 1237; i<1357; i += 20){
            var food = createSprite(i, 405, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 1237; i<1357; i += 20){
            var food = createSprite(i, 462, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 403; i<465; i += 20){
            var food = createSprite(1356, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 182; i<259; i += 20){
            var food = createSprite(1149, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 334; i<455; i += 20){
            var food = createSprite(803, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 40; i<116; i += 20){
            var food = createSprite(392, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 282; i<392; i += 20){
            var food = createSprite(i, 109, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 85; i<92; i += 20){
            var food = createSprite(284, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 301; i<364; i += 20){
            var food = createSprite(i, 78, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 207; i<250; i += 20){
            var food = createSprite(575, i, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 594; i<850; i += 20){
            var food = createSprite(i, 253, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 601; i<850; i += 20){
            var food = createSprite(i, 282, 5, 5);
            food.shapeColor = "yellow";
        }
        for(var i = 204; i<245; i += 20){
            var food = createSprite(818, i, 5, 5);
            food.shapeColor = "yellow";
        }
    }
}