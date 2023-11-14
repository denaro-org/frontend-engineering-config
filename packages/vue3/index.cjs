module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      globals: {
        defineEmits: 'readonly',
        defineProps: 'readonly',
        defineOptions: 'readonly',
        withDefaults: 'readonly',
        defineExpose: 'readonly'
      },
      extends: [
        'plugin:vue/base',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-recommended',
        'plugin:vue/vue3-strongly-recommended'
      ]
    }
  ]
}
