// class MyUseCase {
//     static run() {
//         throw new Error();
//         //return 1;
//     }

//     static async execute(param?: number) {
//         if (param === 3) {
//             throw new Error();
//         }

//         return 1;
//     }
// }

test("test if 2 + 2 == 4", () => {
    const result = 2 + 2;

    expect(result).toEqual(4);
});

// test("test if null is null", () => {
//     const teste = "teste";
//     expect(teste).not.toBeNull();
// });

// test("test if MyUseCase run throws an Error", () => {
//     expect.assertions(1);

//     try {
//         MyUseCase.run();
//     } catch (error) {
//         expect(error).toBeInstanceOf(Error);
//     }
// });

// test("test if MyUseCase run throws an Error without try catch", () => {
//     //expect.assertions(1);
//     expect(MyUseCase.run).toThrow(Error);
// });

// test("test if async method execute returns 1", () => {
//     const result = MyUseCase.execute();
//     result.then((data) => {
//         expect(data).toEqual(1);
//     });
// });

// test("test if async method execute returns 1 with async await", async () => {
//     const result = await MyUseCase.execute();
//     expect(result + 1).toEqual(2);
// });

// test("test if execute throws Error if params === 3", async () => {
//     expect(MyUseCase.execute(3)).rejects;
// });

// test("test if execute does not throws Error if params !== 3", async () => {
//     expect(MyUseCase.execute(1)).resolves;
// });
