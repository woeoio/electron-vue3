# electron-vue3 
一个基于 `electron` & `vue3` 多窗口模式的模板

❗注意  `vue` or `vue-router` 版本 使用的`yarn`进行管理 可自行换`npm`

## 引入依赖问题
- `外部`不会被打包进asar包内:  
所有外部依赖放入到 `src/lib/extern`  
调用 `src/lib/index.ts`  内`getExternPath()` 方法可获取 调试和打包 对应路径   
  

- `内部` 会被打包进asar包内:  
  所有内部依赖放入到 `src/lib/inside`  
  调用 `src/lib/index.ts`  内`getInsidePath()` 方法可获取 调试和打包 对应路径

## 安装依赖
运行命令
```shell
yarn
```
### 安装中的网络问题
- `electron`:
```shell
yarn config set electron_mirror https://npm.taobao.org/mirrors/electron/
```

## 运行调试
运行命令
```shell
yarn run dev:all
```

## electron builder 配置
位于 resources/script/build.js 根据自己需求更改即可   
请参考 [electron-builder](https://www.electron.build/) 文档
