const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./assets/amogus.png");
// ASSET_MANAGER.queueDownload("./assets/guy.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Amogus(gameEngine));
	// gameEngine.addEntity(new Guy(gameEngine));
	
	gameEngine.init(ctx);

	gameEngine.start();
});
