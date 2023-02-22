# Contributing to dish2doortraining

If you want to contribute, create a PR and make your change. If you want to discuss a change, create an issue.

Here is what is mandatory for a PR to be accepted:

- Image size must be 804x834 pixels (yeah I know, it's weird)
- Image must be in PNG format
- Image must be named in the format `<number>.png` (e.g. `0.png`)
- Image must be in the `public/enigma` directory
- Response must be added to the `response` array in `pages/api/response.ts`
- Response must be in the format :

```json
  {
    Marcolla: 'ring',
    Finch: 'diamond',
    Natsiou: 'snuff tin',
    Contee: 'war medal',
    Winslow: 'bird pendant',
  },
```

- Response must be **AT THE SAME INDEX** as the image name in the `public/enigma` directory
