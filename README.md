> [!WARNING]
> This package is deprecated. The content is moved to the [@teamleader/ahoy](https://www.npmjs.com/package/@teamleader/ahoy) package. 
> The further development of the project will be closed-source but the package will be published under the new name.

# Teamleader UI Colors

Teamleader UI colors is a package that defines the colors that we use in our UI package and projects.
The colors are defined as CSS variables and as a JavaScript map (with some helpers).

Our colors are
* aqua
* gold
* neutral
* mint
* ruby
* teal
* violet

For each color there are 5 tints.
* lightest
* light
* normal
* dark
* darkest

## Usage

### install

```
yarn add @teamleader/ui-colors
```
or
```
npm install @teamleader/ui-colors
```

### CSS

Import the css file in your css

```css
@import '@teamleader/ui-colors';
```

The available color variables are

```css
--color-aqua-lightest
--color-aqua-light
--color-aqua
--color-aqua-dark
--color-aqua-darkest
--color-gold-lightest
--color-gold-light
--color-gold
--color-gold-dark
--color-gold-darkest
--color-neutral-lightest
--color-neutral-light
--color-neutral
--color-neutral-dark
--color-neutral-darkest
--color-mint-lightest
--color-mint-light
--color-mint
--color-mint-dark
--color-mint-darkest
--color-ruby-lightest
--color-ruby-light
--color-ruby
--color-ruby-dark
--color-ruby-darkest
--color-teal-lightest
--color-teal-light
--color-teal
--color-teal-dark
--color-teal-darkest
--color-violet-lightest
--color-violet-light
--color-violet
--color-violet-dark
--color-violet-darkest
--color-black
--color-white
```

The colors are defined as hsl values. For each color the h, s an l value are also available as separate variables. There is also a variable that has the hsl values combined. This way you can do color calculations on them with native css (instead of using postcss-color plugin for example). Some examples:

lighten(12%)
```css
hsl(var(--color-ruby-hsl-h), var(--color-ruby-hsl-s), calc(var(--color-ruby-hsl-l) - 12%))
```

tint(64%)
```css
hsl(var(--color-ruby-h), var(--color-ruby-s), calc(var(--color-ruby-l) * 1.64))
```

alpha(12%)
```css
hsl(var(--color-ruby-hsl) / 12%))
```

### JavaScript

```js
import { COLOR, COLORS, TINTS, colorsWithout, tintsWithout } from '@teamleader/ui-colors/constants';
```

`COLOR`: an object that contains the colors as hex values (e.g. `COLOR.MINT.DARKEST`).

`COLORS`: an array with the color names (`['aqua', 'gold', 'neutral', 'mint', 'ruby', 'teal', 'violet']`).

`TINTS`: an array with the tint names (`['lightest', 'light', 'normal', 'dark', 'darkest']`).

`colorsWithout`: a function to get an array of colors without a given array of colors (`colorsWithout(['neutral', 'violet])`)

`tintsWithout`: a function to get an array of tints without a given array of tints (`tintsWithout(['light', 'lightest])`)
