import { Router } from 'express';
import siteController from '../controllers/siteController.js';

const router = Router();

router.get('/', siteController.home);
router.get('/exibicao/json', siteController.json);
router.get('/condicionais', siteController.condicionais);
router.get('/repeticao', siteController.repeticao);



export default router;