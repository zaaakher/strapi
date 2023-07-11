'use strict';

const sendDidCreateStage = async (stagesCount) => {
  strapi.telemetry.send('didCreateStage', { stagesCount });
};

const sendDidEditStage = async () => {
  strapi.telemetry.send('didEditStage', {});
};

const sendDidDeleteStage = async () => {
  strapi.telemetry.send('didDeleteStage', {});
};

const sendDidChangeEntryStage = async () => {
  strapi.telemetry.send('didChangeEntryStage', {});
};

const sendDidCreateWorkflow = async () => {
  strapi.telemetry.send('didCreateWorkflow', {});
};

const sendDidEditWorkflow = async () => {
  strapi.telemetry.send('didEditWorkflow', {});
};

module.exports = {
  sendDidCreateStage,
  sendDidEditStage,
  sendDidDeleteStage,
  sendDidChangeEntryStage,
  sendDidCreateWorkflow,
  sendDidEditWorkflow,
};
