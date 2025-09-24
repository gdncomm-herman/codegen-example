export default {
  services: [
    {
      source: 'https://petstore.swagger.io/v2/swagger.json',
      from: 'swagger_2',
      output: 'src/api-types/petstore-api', // petstore-api
      // urlMethodMapping: [
      //   {
      //     originalUrl: 'get-pokemon-list/gen1',
      //     method: 'get',
      //     methodName: 'GetPokemonListGen1'
      //   },
      //   {
      //     originalUrl: 'get-pokemon-list/gen2',
      //     method: 'get',
      //     methodName: 'GetPokemonListGen2',
      //     proxyUrl: 'gateway/get-pokemon-list/gen2'
      //   }
      // ],
      // selectedOnly: true,
      // modelNameMapping: [
      //   {
      //     fromRegExp: /some\.custom\.model\.naming/,
      //     newModelName: 'CustomModelNaming'
      //   }
      // ],
    },
    // {
    //   // source: '<git repo> <branch name> <file to path>',
    //   source: 'ssh://git@github.com/pokemon/pokemon-api.git master -- docs/evolution-path.json',
    //   from: 'openapi_3',
    //   output: 'src/api-types/evolution-path', // evolution-path
    // }, 
  ]
};
