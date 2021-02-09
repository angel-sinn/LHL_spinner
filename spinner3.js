function spinner() {
  const spinnerIcons = ["|", "/", "-", "\\", "|"];
  let delay = 0;
  for (const icon of spinnerIcons) {
    setTimeout(() => {
      process.stdout.write(`\r${icon}`);
    }, (delay += 200));
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, delay);
}

spinner();
