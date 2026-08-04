 


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

GameKit is a MakeCode Arcade extension that provides useful blocks for creating platformer games. It includes enemy AI, gravity helpers, hazard damage, and enemy spawning from tilemaps.

## Features

- 🏃 Simple enemy patrol AI
- 🌍 Gravity helper for sprites
- ☠️ Damage from hazard tiles with invincibility cooldown
- 👾 Spawn enemies from tilemap spawn points

---

## Blocks

### Make Enemy Patrol

Makes an enemy continuously walk left and right. The enemy automatically turns around whenever it collides with a wall.

```blocks
GameKit.makeEnemyPatrol(myEnemy, 30)
```

**Parameters**

| Name | Description |
|------|-------------|
| `enemy` | The sprite that will patrol. |
| `speed` | How fast the enemy moves horizontally. |

---

### Give Gravity

Applies platformer-style gravity to a sprite.

```blocks
GameKit.giveGravity(mySprite)
```

This sets the sprite's vertical acceleration (`ay`) to `200`.

**Parameters**

| Name | Description |
|------|-------------|
| `sprite` | The sprite to apply gravity to. |

---

### Spawn Enemies On Tiles

Creates a new enemy sprite on every tile of the selected tile type.

Each spawned enemy:
- is placed on its tile
- automatically patrols
- automatically has gravity applied
- removes the spawn tile after spawning

```blocks
GameKit.spawnEnemiesOnTiles(
    enemyImage,
    SpriteKind.Enemy,
    assets.tile`enemySpawn`
)
```

**Parameters**

| Name | Description |
|------|-------------|
| `img` | The image used for every spawned enemy. |
| `kind` | The SpriteKind of the new enemies. |
| `tileType` | Every tile of this type becomes an enemy spawn point. |

---

### Take Damage From Tile

Makes a player lose lives when touching a hazard tile.

The block includes:
- configurable damage
- invincibility cooldown
- optional bounce effect
- configurable bounce force

```blocks
GameKit.takeDamageFromTile(
    myPlayer,
    assets.tile`lava`,
    1,
    500,
    true,
    100
)
```

**Parameters**

| Name | Description |
|------|-------------|
| `player` | The player sprite that can take damage. |
| `tile` | The hazard tile. |
| `damage` | Number of lives lost each hit. |
| `cooldown` | Time (milliseconds) before damage can be taken again. |
| `bounce` | Whether the player is knocked upward after taking damage. |
| `bounceForce` | The strength of the bounce. |

---

## Example

```blocks
GameKit.giveGravity(player)

GameKit.takeDamageFromTile(
    player,
    assets.tile`lava`,
    1
)

GameKit.spawnEnemiesOnTiles(
    enemyImage,
    SpriteKind.Enemy,
    assets.tile`enemySpawn`
)
```

---

## Installation

Open **Extensions** inside MakeCode Arcade and search for **GameKit**, or paste the GitHub repository URL.

---

## License

This project is licensed under the MIT License.
