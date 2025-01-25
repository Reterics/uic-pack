# uic-pack

UI Component Pack for React + Tailwind Projects

## Getting started 🚀


### Install

 - use npm
```bash
npm i uic-pack
```

 - use yarn
```bash
yarn add uic-pack
```

 - use pnpm
```bash
pnpm install uic-pack
```
### Usage

Import working React components from

```javascript
import { StyledInput, FormRow } from "uic-pack";


<FormRow>
  <StyledInput
    type="text" name="name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    label={"Name"}
  />
  <StyledInput
    type="password" name="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    label={"Password"}
  />
</FormRow>
```


### Available components

- FormRow
- StyledFile
- StyledInput
- StyledSelect
- StyledMultiSelect
- DraggableDiv
- MenuBar

## Contribute

 - If you have a feature request, [create an issue](https://github.com/Reterics/uic-pack/issues) or [make a pull request ](https://github.com/Reterics/uic-pack/pulls)
 - If you have a bug to report, [you can create an issue here.](https://github.com/Reterics/uic-pack/issues) Please try to write as much details as possible to help reproduce and fix it.
