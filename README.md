react-cms-prototype
===================

### Setup

```sh
git clone git@github.com:wayneashleyberry/react-cms-prototype.git && cd react-cms-prototype
npm install
npm install -g browserify watchify
```

### Running

Tab 1:

```sh
cd src
watchify bootstrap.js -o bootstrap-compiled.js -v -t reactify
```

Tab 2:

```sh
cd src
php -S localhost:8080
```

### Render Static Pages

```sh
cd src
node static.js [path]
```

Examples:

```sh
node static.js /
node static.js /people/1
```
