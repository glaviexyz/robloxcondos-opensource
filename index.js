import { getCsrfToken, uploadGame } from "./roblox.js";
import fs from 'fs/promises'


const account = "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_7369887D263C7213A6BFE1EA907BAB3A34986131AAC45DA7B35C74CD950CCD1EF822C90C5FEA274839CFF9CC66DF582A36E91D0C2D58AC74A2612A32966150C3E4E843A905CC92A10DB09B5605558F1E550EA287A514BFB48F0A397276718B4C4FCCF9F04E064201AA09A475F65D52118D0891F1EE88BD160DF13EF2782AB80C21BA4C60F95BF53D6E5AB4F2738C1A4BBE5E94511048D7DE4EF1F17689E7A00DE48BE7C4956E861903FEFFCC1B140CC939BAD9DAF13273770C9044A974823960A28464954661C5E1C86D91B762E0404103F9B0B54643E37A474CF4C1054F1B815224D60E554F9C9E07B753F8D9D10F85C7FCD984C10A303A6C1A1BB816877B9D9E752CE57714AC02E16637896E94D0A7293CFAC743EED19BBAEF64DAB76619928B545A30ED28961C1D4D5085A0B1B212BB50F546491BC6271614131B1FC071D4EC23D3F882C6EBA9590E15673486C7F1DA7BB8E8D0D11693AF6D1B0A185CBE22F12E6A27BA0C80B56CC1269063B4D6D28E70C1AA451F906DC7EF8125D70C3760D42A0B2EFC21BF0BC982352E68B5AEC0C7E862F4D6747B1268BCB5297C279B22A0A1CB546CF928EA009F986964A9454401F60E176A6788A3B34357D6F9D04E830CFC266C"
const file = await fs.readFile("town.rbxl")
const csrf = await getCsrfToken(account)

            // put your place id here
uploadGame(16206012126, file, csrf, account)