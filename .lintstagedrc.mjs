export default {
  // 针对不同文件类型执行对应任务
  '**/*.{vue,ts,js,jsx,tsx}': [
    'eslint --fix', // 严格模式，零警告容忍[1,7](@ref)
    // 'prettier --write', // 自动格式化
  ],
}