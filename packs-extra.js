window.NONOGRAM_PACK_FACTORIES = window.NONOGRAM_PACK_FACTORIES || [];

window.NONOGRAM_PACK_FACTORIES.push(
  ({ basePalette, makeSolution30, makeSolutionVariant }) => [
    {
      id: "planet-2",
      title: "Pack #2 | Adventures",
      puzzles: [
        {
          id: "adventures-30x45-v1",
          title: "Adventure 30x45",
          width: 30,
          height: 45,
          palette: basePalette,
          solution: makeSolution30(),
        },
      ],
    },
    {
      id: "planet-3",
      title: "Pack #3 [35x45]",
      puzzles: [
        {
          id: "planet-25x35-v2",
          title: "Puzzle #1",
          width: 25,
          height: 35,
          palette: basePalette,
          solution: makeSolutionVariant(),
        },
      ],
    },
  ]
);
