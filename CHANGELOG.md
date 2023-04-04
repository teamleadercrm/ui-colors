## [unreleased]

### Added

### Changed

### Deprecated

### Removed

### Fixed

## [2.0.0] - 2023-04-04

### Changed

- [BREAKING] Changed to the newer comma-free color syntax for hsl values (e.g. `hsl(198deg, 28%, 28%)` becomes `hsl(198deg 28% 28%)`). This might be breaking in case you use the colors in combination with alpha (e.g. `hsl(var(--color-mint-hsl), 50%)` should become `hsl(var(--color-mint-hsl) / 50%)`). We also noticed that postcss was having issues with the previous notation and removing the comma before the alpha, causing the color to be invalid. ([@lowiebenoot](https://github.com/lowiebenoot) in [#5](https://github.com/teamleadercrm/ui-colors/pull/5))

## [1.1.0] - 2023-01-06

### Added

- All colors now also have a variable with combined hsl values (e.g. `--color-mint-hsl`)

### Changed

- Build for ES5 and commonJS.

## [1.0.0] - 2023-01-05

### Changed

- Colors are defined in HSL values instead of HEX values. ([@lowiebenoot](https://github.com/lowiebenoot)) in ([#4](https://github.com/teamleadercrm/ui/pull/4))

### Added

- Colors can be imported in JavaScript/TypeScript as well now. ([@lowiebenoot](https://github.com/lowiebenoot)) in ([#4](https://github.com/teamleadercrm/ui/pull/4))

## [0.3.0] - 2020-05-19

### Changed

- :fire: `Teal dark`: changed hex value from `#344b63` to `#2a3b4d`. ([@driesd](https://github.com/driesd) in [#3])

## [0.2.0] - 2020-03-31

### Changed

- :fire: `Teal darkest`: changed hex value from `#2a3b4d` to `#1a1c20`. ([@driesd](https://github.com/driesd) in [#2])

## [0.1.0] - 2020-03-20

### Changed

- changed all lightest color values to be less bright than the previous ones. ([@driesd](https://github.com/driesd) in [#1])
