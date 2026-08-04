 


> Open this page at [https://tumikrist.github.io/custom-blocks-skema/](https://tumikrist.github.io/custom-blocks-skema/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/tumikrist/custom-blocks-skema** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://arcade.makecode.com/](https://arcade.makecode.com/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/tumikrist/custom-blocks-skema** and click import

#### Metadata (used for search, rendering)

* for PXT/arcade
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>

# GameKit

GameKit is a MakeCode Arcade extension that adds helper blocks for enemy AI and platformer games.

## Blocks

### Make Enemy Patrol

Makes an enemy walk back and forth, turning around when it hits a wall.

```blocks
GameKit.makeEnemyPatrol(myEnemy, 30)
```

### Give Gravity

Applies gravity to a sprite.

```blocks
GameKit.giveGravity(mySprite)
```

### Spawn Enemies On Tiles

Creates a new enemy on every tile of the selected type.

```blocks
GameKit.spawnEnemiesOnTiles(enemyImage, SpriteKind.Enemy, assets.tile`enemySpawn`)
```

## License

MIT
