import plugin from 'tailwindcss/plugin';

export default plugin(function ({ addBase, theme }) {
  const colors = theme('colors', {} as Record<string, string>);
  console.log(colors);
  
  // Определите цвет по умолчанию
  const defaultColor = 'color3'; // Здесь можно установить ваш цвет по умолчанию

  // Добавьте базовый CSS, который устанавливает --skin-color
  addBase({
    ':root': {
      '--skin-color': colors[defaultColor],
    },
  });
});
