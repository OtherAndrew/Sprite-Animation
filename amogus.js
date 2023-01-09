class Amogus {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./assets/amogus.png"),
            0, 250, 180, 250, 12, 0.05);
    };
    
    update() {
        
    };
    
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25, 0.5);
    };
}
