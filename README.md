# Puremo Static Website

Puremo is a simple static website built with HTML, CSS, and JavaScript, deployed using GitHub Actions for CI/CD. It uses HTML5Validator and Stylelint for code quality and automated deployments.

- Beta: https://beta.puremolife.com
- Prod: https://puremolife.com

## Development Cycle

### Workflow

1. Create branch:

```
git checkout -b your-feature
```

2. Push:

```
git add .
git commit -m "Add feature"
git push origin your-feature
```

3. Open PR to `main`:

- Validates HTML and CSS, builds to Development, test at https://beta.puremolife.com

4. Merge PR:

- Deploys to Production, available at https://puremolife.com

## Setup

### Prerequisites

- Git
- Hostinger shared hosting
- GitHub account
- A modern web browser for local testing
- (Optional) Python 3.11+ and Node.js for local validation

### Local Development

1. Clone:

```
git clone https://github.com/royal-cascade-ventures/puremo.git
cd puremo
```

2. Open `src/index.html` in a web browser to view the site locally.

### Code Quality (Optional)

1. Install validators:

```
pip install html5validator
npm install -g stylelint stylelint-config-standard
```

2. Validate HTML:

```
html5validator --root src
```

3. Validate and fix CSS:

```
stylelint "src/**/*.css" --fix
```

### File Structure

```
puremo/
├── src/
│   ├── index.html
│   ├── styles.css
│   ├── script.js
├── .github/workflows/
│   ├── build-and-deploy.yml
│   ├── pr-validation.yml
├── .stylelintrc.json
├── README.md
├── LICENSE
```

## License
MIT License. See [LICENSE](https://github.com/royal-cascade-ventures/puremo/blob/main/LICENSE).

## Contact
Open an issue or email info@puremolife.com