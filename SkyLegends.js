var leaves = 18;


ModPE.setItem(400, "skull_creeper", 0, "Wood Crook");

ModPE.setItem(401, "skull_skeleton", 1, "Stone Crook");

ModPE.setItem(402, "skull_zombie", 2, "Iron Crook");

ModPE.setItem(403, "skull_wither", 3, "Gold Crook");

ModPe.setItem(404, "skull_steve", 4, "Diamond Crook);

Item.addShapedRecipe(400, 1, 0, [
"ss "
" s "
"  s"
],

["s", 280, 0];

Item.addShapedRecipe(401, 1, 0, [
"ts "
" s "
"  s"
],

["t", 4, 0, "s", 280, 0];

Item.addShapedRecipe(403, 1, 0, [
"is "
" s "
"  s"
]

["i", 265, 0, "s", 280, 0];

Item.addShapedRecipe(404, 1, 0, [
"gs "
" s "
"  s"
],

["g", 266, 0, "s", 280, 0];

Item.addShapedRecipe(405, 1, 0, [
"ds "
" s "
"  s"
],

["d", 264, 0, "s" 280, 0];

function useItem(x,y,z,itemId,blockId,side){

if(Player.getCarriedItem() == 400);

  Player.addItemInventory( 6, 1,0);

}
function useItem(x,y,z,itemId,blockId,side){

if(Player.getCarriedItem() == 401);

  Player.addItemInventory( 6, 2,0);

}
function useItem(x,y,z,itemId,blockId,side){

if(Player.getCarriedItem() == 402);

  Player.addItemInventory( 6, 3,0);

}
function useItem(x,y,z,itemId,blockId,side){

if(Player.getCarriedItem() == 403);

  Player.addItemInventory( 6, 2,0);

}
function useItem(x,y,z,itemId,blockId,side){

if(Player.getCarriedItem() == 404);

  Player.addItemInventory( 6, 5,0);

}

ModPE.setItem(405, "record_11", 0, "Wood Hammer");

ModPE.setItem(406, "record_13", 0, "Stone Hammer");

ModPE.setItem(407, "record_cat", 0, "Stone Hammer");

ModPE.setItem(408, "record_chirp", 0, "Stone Hammer");

ModPE.setItem(409, "record_far", 0, "Stone Hammer");

function useItem(x, y, z, itemid, 13, side)

if(Player.getCarriedItem() == 405);{

Level.setTile(x, y, z, 410);
  
  
  }
  
Block.defineBlock(410,"Iron Gravel","iron_ore",0,false,0)
Block.setDestroyTime(410, 3.5);
