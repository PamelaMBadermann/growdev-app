import express from 'express';
import cors from 'cors';
import { DatabaseConnection } from './core/database/connections/connection';
import 'reflect-metadata';
import { initServer } from './core/presentation/server';

DatabaseConnection.initConnection()
    .then(() => {
        initServer()
    })
    .catch((error) => {
        console.log(error);
    });
