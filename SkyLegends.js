var leaves = 18;
ModPE.setItem(400, "skull_creeper", 0, "Wood Crook");

ModPE.setItem(401, "skull_skeleton", 1, "Stone Crook");

ModPE.setItem(402, "skull_zombie", 2, "Iron Crook");

ModPE.setItem(403, "skull_wither", 3, "Gold Crook");

ModPe.setItem(404, "skull_steve", 4, "Diamond Crook");

Item.addShapedRecipe(400, 1, 0, [
"ss "
" s "
" s"
],
["s", 280, 0]);

Item.addShapedRecipe(401, 1, 0, [
"ts "
" s "
" s"
],
["t", 4, 0, "s", 280, 0]);

Item.addShapedRecipe(403, 1, 0, [
"is "
" s "
" s"
]
["i", 265, 0, "s", 280, 0]);

Item.addShapedRecipe(404, 1, 0, [
"gs "
" s "
" s"
],
["g", 266, 0, "s", 280, 0]);

Item.addShapedRecipe(405, 1, 0, [
"ds "
" s "
" s"
],
["d", 264, 0, "s" 280, 0]);

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

function useItem(x, y, z, itemid, 13, side){
if(Player.getCarriedItem() == 405);

Level.setTile(x, y, z, 410);

}
Block.defineBlock(410, "Iron Gravel","iron_ore", 0,false,0);

Block.setDestroyTime(410, 3.5);

Block.defineBlock(411, "Gold Gravel", "gold_ore", 0, false, 0);

Block.setDestroyTime(411, 3.7);

Block.defineBlock(412, "Diamond Gravel", "diamond_ore", 0, false, 0);

Block.setDestroyTime(412, 3.8);

Block.defineBlock(413, "Coal Gravel", "coal_ore", 0, false, 0);

Block.setDestroyTime(413, 2.0);

function useITem(x,y,z, itemid, 13, side){
if(Player.getCarriedItem() == 406);

	Level.setTile(x, y, z, 410);
	
}

function useItem(x, y, z, itemid, 13, side){
if(Player.getCarriedItem() == 407);

	Level.setTile(x, y , z, 411);

}

function useItem(x, y, z, itemId, 13, side){

if(Player.getCarriedItem() == 408);

	Level.setTile(x, y, z, 413);
	
}

function useItem(x, y, z, itemId, 13, side){

if(Player.getCarriedItem() == 409);

	Level.setTile(x, y, z, 412);
	
}

ModPE.setItem(414, slimeball, 0, "Clay Bucket");

Item.addShapedCraftRecipe(414, 1, 0, [
"c c"
" c "
"   "],
["c", 337, 0]);

Item.addFurnacerecipe(414, 0, 325);







