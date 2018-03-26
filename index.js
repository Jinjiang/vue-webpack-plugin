class VueWebpackPlugin {
  apply (compiler) {
    compiler.plugin('compilation', compilation => {
      function getDeps (module) {
        return module.dependencies.
          filter(dep => (
            dep.type === 'harmony side effect evaluation' ||
            dep.type === 'cjs require')).
          filter(dep => dep.loc.index !== -1)
      }
      function getRequest (dep) {
        return dep.request
      }
      function walk (module) {
        const deps = getDeps(module)
        console.group(module.rawRequest)
        if (deps.length) {
          deps.map(dep => dep.module).forEach(walk)
        }
        console.groupEnd(module.rawRequest)
      }

      // function hook (name) {
      //   compilation.plugin(name, () => { console.log(name) })
      // }

      // ['buildModule', 'rebuildModule', 'failedModule', 'succeedModule', 'finishModules', 'finishRebuildingModule', 'seal', 'unseal', 'optimizeDependenciesBasic', 'optimizeDependencies', 'optimizeDependenciesAdvanced', 'afterOptimizeDependencies', 'optimize', 'optimizeModulesBasic', 'optimizeModules', 'optimizeModulesAdvanced', 'afterOptimizeModules', 'optimizeChunksBasic', 'optimizeChunks', 'optimizeChunksAdvanced', 'afterOptimizeChunks', 'optimizeTree', 'afterOptimizeTree', 'optimizeChunkModulesBasic', 'optimizeChunkModules', 'optimizeChunkModulesAdvanced', 'afterOptimizeChunkModules', 'shouldRecord', 'reviveModules', 'optimizeModuleOrder', 'advancedOptimizeModuleOrder', 'beforeModuleIds', 'moduleIds', 'optimizeModuleIds', 'afterOptimizeModuleIds', 'reviveChunks', 'optimizeChunkOrder', 'optimizeChunkIds', 'afterOptimizeChunkIds', 'recordModules', 'recordChunks', 'beforeHash', 'afterHash', 'recordHash', 'record', 'beforeModuleAssets', 'shouldGenerateChunkAssets', 'beforeChunkAssets', 'additionalChunkAssets', 'records', 'additionalAssets', 'optimizeChunkAssets', 'afterOptimizeChunkAssets', 'optimizeAssets', 'afterOptimizeAssets', 'needAdditionalSeal', 'afterSeal', 'chunkHash', 'moduleAsset', 'chunkAsset', 'assetPath', 'needAdditionalPass', 'childCompiler', 'normalModuleLoader'].forEach(hook)

      compilation.plugin('advancedOptimizeModuleOrder', (modules) => {
        console.log('advancedOptimizeModuleOrder')
        // adjust module order here
      })
    })
    compiler.plugin('done', compilation => {
      console.log('done')
      console.log(compilation.compilation.modules.map(module => module.rawRequest || 'undefined').join('\n'))
    })
  }
}

module.exports = VueWebpackPlugin
