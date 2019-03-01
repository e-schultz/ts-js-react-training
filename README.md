# Advanced MDX-deck

In this example we will be deploying an [mdx-deck](https://github.com/jxnblk/mdx-deck) presentation which will also contain:
+ Images that we want to be available offline
+ Custom MDX-deck layouts
+ Code snippets that we want to be available offline
+ A custom [Codesurfer](https://elijahmanor.com/code-surfer/) React component to navigate code snippets
![images/demo.gif](images/demo.gif)

## Getting started with Advanced MDX-deck
A sample presentation has been created at `demo-advanced.mdx`

### Deploy with Now

First we need to create a `now.json` configuration file to instruct Now how to build the project.

For this example we will be using our newest version [Now 2.0](https://zeit.co/docs/v2/platform/upgrade-to-2-0/).

By adding the `version` key to the `now.json` file, we can specify which Now Platform version to use.

We also need to define how the project will be built. In this case, we will use the [@now/mdx-deck Builder](https://zeit.co/docs/v2/deployments/official-builders/mdx-deck-now-mdx-deck/).

[Builders](https://zeit.co/docs/v2/deployments/builders/overview/) are modules that take a deployment's source and return an output, consisting of [either static files or dynamic Lambdas](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs).

In this case we are going to use `@now/static-build` to build and deploy our static application selecting the `package.json` as our entry point. We will also define a name for our project (optional).

If we take a look at our demo presentation `demo-advanced.mdx` we will see that we are loading images and code snippets.

As an added bonus, if you look at line forty-three (43) of `demo-advanced.mdx` there is a custom React component that allows the presenter to identify and highlight specific lines from the example code snippet:

```jsx
<CodeSurfer
  code={require("raw-loader!./snippets/example-dockerfile.snippet")} 
  title="Dockerfile for photo-share-api"
  showNumbers
  steps={[
    {}, // First step should be an overview of the snippet
    {lines: [1], notes: "Specify the base Node.js image"},
    {range: [6,7], notes: "Create the working directory on our process"},
    {range: [9,11], notes: "Copy and install our dependencies just like we would locally"},
    {range: [13,14], notes: "Copy our application code over"},
    {lines: [15], notes: "What is this? It seems a little...unusual."},
    {range: [17,19], notes: "We need to define ports for Docker to access"},
    {range: [21,22], notes: "This is the command to start our back-end server"},
    {}
  ]}
/>

// Special thanks to https://elijahmanor.com/code-surfer/ for this custom component
```

We must update our `now.json` file by adding a routes key to handle this. Our default route `/` will serve up the `index.html` page generated through the mdx-deck build process. We are also adding additional routes `/images` and `/snippets` for additional assets we are including with the presentation.

```json
{
  "version": 2,
  "name": "mdx-deck-advanced",
  "builds": [
    {"src": "package.json", "use": "@now/static-build"}
  ],
  "routes": [
    { "src": "^/images/(.*)", "dest": "/images/$1" },
    { "src": "^/snippets/(.*)", "dest": "/snippets/$1" },
    { "src": "index.html", "dest": "/index.html" }
  ]
}
```

Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

We also need to include a script in `package.json` named `"now-build"` that specifies what command Now will run on the server to "build" your application.

By default, MDX-deck will output the build to the `dist` directory. We also need to explicitly copy folders containing our images and our snippets to the `dist` folder.

```json
{
    "scripts": {
        ...
        "now-build": "mdx-deck build demo-advanced.mdx --no-html && cp -r images dist/ && cp -r snippets dist/"
    }
}
```

We are now ready to deploy the app.

```
now
```
