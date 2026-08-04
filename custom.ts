enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * GameKit blocks
 */
//% color="#AA278D" icon="\uf11b"
namespace GameKit {
    let dmgTimer = 0
    /**
     * Make a sprite take damage when touching a hazard tile,
     * with a cooldown so it doesn't lose a life every single frame.
     */
    //% block="make $player=variables_get(mySprite) lose $damage life on $tile=tileset_tile_picker || cooldown $cooldown ms|bounce on hit $bounce bounce force $bounceForce"
    //% tile.decompileIndirectFixedInstances=true
    //% damage.defl=1
    //% cooldown.defl=500
    //% bounce.defl=true
    //% bounceForce.defl=100
    //% expandableArgumentMode="toggle"
    //% inlineInputMode="inline"
    export function takeDamageFromTile(player: Sprite, tile: Image, damage: number, cooldown: number = 500, bounce: boolean = true, bounceForce: number = 100) {

        scene.onOverlapTile(SpriteKind.Player, tile, function (sprite: Sprite, location: tiles.Location) {
            if (sprite != player) return
            if (dmgTimer <= 0) {
                info.changeLifeBy(-damage)
                if (bounce == true){
                    player.vy = -bounceForce
                }
                dmgTimer = cooldown
            }
        })

        game.onUpdateInterval(100, function () {
            if (dmgTimer > 0) {
                dmgTimer -= 100
            }
        })
    }

    // Manage Enemies ================
    interface PatrolEntry {
        sprite: Sprite
        speed: number
    }

    let patrollers: PatrolEntry[] = []
    let patrolLoopStarted = false

    function startPatrolLoopOnce() {
        if (patrolLoopStarted) return
        patrolLoopStarted = true

        game.onUpdate(function() {
            for (let i = patrollers.length - 1; i >= 0; i--){
                const entry = patrollers[i]
                const enemy = entry.sprite

                if (!enemy || enemy.flags & sprites.Flag.Destroyed) {
                    patrollers.removeAt(i)
                    continue
                }
                if (enemy.isHittingTile(CollisionDirection.Left)) {
                    enemy.vx = entry.speed
                } else if (enemy.isHittingTile(CollisionDirection.Right)) {
                    enemy.vx = -entry.speed
                }
            }
        })
    }
    // ===============================

    /**
     * make enemy patrol back and forth.
     */
    //% block="make $enemy=variables_get(mySprite) patrol with $speed"
    //% speed.defl=30
    export function makeEnemyPatrol(enemy: Sprite, speed: number) {
        enemy.setVelocity(speed, 0)
        patrollers.push({ sprite: enemy, speed: speed })
        startPatrolLoopOnce()
    }

    /**
     * Gives a sprite gravity
     */
    //% block="give $sprite=variables_get(mySprite) gravity"
    export function giveGravity(sprite: Sprite) {
        sprite.ay = 200
    }
    

    /**
     * Spawn a new enemy on every matching tile.
     */
    //% block="spawn $img=screen_image_picker of kind $kind=spritekind on all $tileType=tileset_tile_picker"
    //% tileType.decompileIndirectFixedInstances=true
    export function spawnEnemiesOnTiles(img: Image, kind: number, tileType: Image) {
        for (let value of tiles.getTilesByType(tileType)) {
            // 1. Create a brand new, unique sprite for THIS specific tile
            let newEnemy = sprites.create(img, kind);

            // 2. Place the newly created sprite onto the current tile instance
            tiles.placeOnTile(newEnemy, value);

            // 3. Apply your custom GameKit physics and behaviors to the unique clone
            GameKit.makeEnemyPatrol(newEnemy, 30);
            GameKit.giveGravity(newEnemy);

            // 4. Remove the tile at pos
            tiles.setTileAt(value, assets.tile`transparency16`)
        }
    }
}