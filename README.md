# Puremo React App

Puremo is a single-page React app developed using React, Docker, and CI/CD. It uses ESLint (Airbnb style guide) for code quality and automated deployments.

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

- Builds to Development, test at https://beta.puremolife.com

3. Merge PR:

- Builds to Production, deploys to https://puremolife.com

## Setup

### Prerequisites

- Docker, Docker Compose
- Git
- Hostinger shared hosting
- GitHub account

### Local Development

1. Clone:

```
git clone https://github.com/royal-cascade-ventures/puremo.git
cd puremo
```

2. Run:

```
docker compose up --build
```

3. Visit: `http://localhost:3000`

4. Stop:

```
docker compose down
```

### Code Quality

1. Lint:

```
docker run --rm -v $(pwd):/app -w /app node:18-alpine npm run lint
```

2. Update package-lock.json

```
docker run --rm -v $(pwd):/app -w /app node:18-alpine npm install
```

### File Structure

```
puremo/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.jsx
│   ├── index.css
├── public/
│   ├── index.html
├── .github/workflows/
│   ├── build-and-deploy.yml
│   ├── pr-validation.yml
├── .eslintrc.json
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
```

License
MIT License. See [LICENSE](https://github.com/royal-cascade-ventures/puremo/blob/main/LICENSE).

Contact
Open an issue or email info@puremolife.com
