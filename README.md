# Estrutura do Projeto:

    ```
    - src
        - controllers
            - MooviesController.js
            - CategoryController.js
        - routes
            - moovies.js
            - category.js
        - db
            - index.js
    - index.js
    - package.json
    - package-lock.json
    - .env
    - .env.example
    - .gitignore
    - readme.md
    ```

# Schema DB

```
CREATE TABLE category (
    id  SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255)
);
```

```
CREATE TABLE moovie (
    id SERIAL PRIMARY KEY,
    category_id INTEGER REFERENCES category(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    realease_date VARCHAR(255)
);
```

# Melhorias para api

    ```
    - Criar endpoints para atualizar registros
    - Criar validação de criação de moovies (Validação de categoria existente)
    ```
