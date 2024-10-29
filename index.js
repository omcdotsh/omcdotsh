const { promises: fs } = require("fs");
const path = require("path");

const today = new Date();

async function generateNewREADME() {
  const templatePath = path.join(__dirname, "TEMPLATE.md");
  const readmeContent = await fs.readFile(templatePath, "utf-8");
  const readmeRows = readmeContent.split("\n");

  function updateIdentifier(identifier, replaceText) {
    const identifierIndex = findIdentifierIndex(readmeRows, identifier);
    if (identifierIndex === -1) return;
    readmeRows[identifierIndex] = readmeRows[identifierIndex].replace(
      `<#${identifier}>`,
      replaceText
    );
  }

  const identifierToUpdate = {
    gabot_signing: getLastUpdatedDate(),
  };

  Object.entries(identifierToUpdate).forEach(([key, value]) => {
    updateIdentifier(key, value);
  });

  return readmeRows.join("\n");
}

function getLastUpdatedDate() {
  return `last updated on ${today.toDateString().toLowerCase()}`;
}

const findIdentifierIndex = (rows, identifier) =>
  rows.findIndex((r) => r.includes(`<#${identifier}>`));

const updateREADMEFile = (text) => fs.writeFile("./README.md", text);

async function main() {
  try {
    const newREADME = await generateNewREADME();
    console.log(newREADME);
    await updateREADMEFile(newREADME);
  } catch (error) {
    console.error("Error updating README:", error);
  }
}

main();
