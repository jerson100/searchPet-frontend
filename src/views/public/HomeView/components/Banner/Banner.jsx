import { Grid, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";
import {
  BannerTittleStyle,
  BannerTextStyle,
  BannerSvgPetsStyle,
  BannerContainerStyle,
  BannerLogoTittleStyle,
} from "./banner.style";
import {
  bannerContainerVariants,
  ImageVariants,
  TextBannerVariants,
} from "./banner.variants";

const Banner = () => {
  return (
    <BannerContainerStyle
      initial="hidden"
      whileInView="show"
      variants={bannerContainerVariants}
      viewport={{
        once: true,
      }}
    >
      <Container>
        <Grid container alignItems={"center"}>
          <Grid
            item
            sm={12}
            md={6}
            sx={{
              textAlign: { xs: "center", md: "left" },
              order: { xs: "2", md: "1" },
            }}
          >
            <BannerTittleStyle
              component={motion.h1}
              variant="h2"
              variants={TextBannerVariants}
            >
              !Te damos la bienvenida a{" "}
              <BannerLogoTittleStyle>SPet!</BannerLogoTittleStyle>
            </BannerTittleStyle>
            <Typography
              component={motion.p}
              variant="body1"
              variants={TextBannerVariants}
            >
              Espacio en el que puedes ser y hacer feliz a las mascotas
            </Typography>
            <BannerTextStyle
              variant="body1"
              component={motion.p}
              variants={TextBannerVariants}
            >
              ¿Qué estás esperando?
            </BannerTextStyle>
            <Button
              variant="contained"
              component={motion.button}
              variants={TextBannerVariants}
            >
              Empezar a ayudar
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
              order: { xs: "1", md: "2" },
            }}
          >
            <BannerSvgPetsStyle
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 656 447.5061"
              variants={ImageVariants}
            >
              <path
                d="M108.40148,315.94602c-3.16093,.3401-6.60921,.85055-10.27718,1.59744-15.55246,3.16687-15.87526,13.72736-15.73896,16.14847l-.10566-.06586c-1.56382,2.50859-2.54325,5.0473-3.13519,7.44337l-.71221-32.36652c.46052-.9602,.87954-2.04896,1.22889-3.16494,1.16419,3.58504,3.07256,6.97195,4.7176,6.74748,2.13909-.2919,3.07167-6.58596,2.67265-11.05881,2.72016,3.50314,7.2981,7.24972,9.02511,6.09446,1.38001-.92313,.56173-4.72359-.94492-8.17871,3.13929,1.89132,6.61613,3.13439,7.69503,1.93342,1.47227-1.63885-2.05557-7.23082-5.30905-10.35235,4.35496,.40613,9.89372-.28771,10.25684-2.26977,.2992-1.6331-2.99722-3.69384-6.5255-5.02014,3.5439-.93441,6.85789-2.56256,6.74798-4.17324-.13057-1.91338-5.05068-3.19543-9.29526-3.39051,3.20154-2.50471,6.14321-5.96711,5.24362-7.53303-.82704-1.43962-4.67439-.88198-8.22406,.38596,2.10064-3.00326,3.5775-6.38742,2.45277-7.54556-1.40106-1.44266-6.37359,1.04738-9.76711,3.79978,.66062-4.28797,.32665-9.70052-1.59659-10.19022-1.60895-.40967-3.88929,2.73886-5.4527,6.16866-.69097-3.59931-2.08979-7.01645-3.7042-7.01645-2.29982,0-4.16418,6.93399-4.16418,11.45149,0,.25536,.00677,.49574,.01843,.72541-.23083-.26761-.49538-.54719-.79707-.84018-3.24076-3.14728-9.51391-6.64064-11.11616-4.99082-1.12474,1.15814,.35212,4.5423,2.45277,7.54556-3.54967-1.26794-7.39702-1.82559-8.22406-.38596-1.11127,1.93439,3.63883,6.76323,7.4999,9.10499-.2321-.02796-.47595-.0515-.73547-.0692-4.50701-.30752-11.55183,1.08049-11.7084,3.37497-.10991,1.61067,3.20409,3.23883,6.74798,4.17324-3.52829,1.3263-6.8247,3.38704-6.5255,5.02014,.36312,1.98206,5.90188,2.6759,10.25684,2.26977-3.25348,3.12154-6.78132,8.7135-5.30905,10.35235,1.0789,1.20097,4.55573-.0421,7.69503-1.93342-1.50665,3.45512-2.32492,7.25558-.94492,8.17871,1.82373,1.21996,6.82541-3.02601,9.4625-6.67949-.2687,4.46965,.80077,10.61004,2.9228,10.85236,.88742,.10134,1.82777-.84507,2.67643-2.3023l-2.40356,34.79012c-.56184,4.05159,3.03199,6.69542,3.35318,8.36434l.51842,23.5593c-.58508-1.67794-1.37316-3.3952-2.43548-5.09933l-.10566,.0659c.13628-2.42136-.18675-12.98155-15.73896-16.14836-3.66797-.74689-7.11625-1.25734-10.27718-1.59744-3.73116-.40145-5.1866,4.70611-1.81595,6.35581,4.88144,2.38917,9.4733,5.39935,11.86668,8.96403,6.11901,9.11359,14.5737,3.84542,15.77578,3.0275,1.34266,2.23509,2.22306,4.48687,2.77913,6.62945l.27531,12.51144c-.06744,.2959-.11414,.46159-.11777,.47403l.12902,.03782,.66628,30.27884,6.18057-.04965-2.21068-30.94947c.37149-1.66957,1.51435-7.35722,0-13.26406l-2.21068-24.31744h0c-.0055-.01877,.12548,.63842,0,0l-2.8837-9.55504c.41933-2.95604,1.3925-6.28098,3.36894-9.57097,1.20206,.81791,9.65677,6.08611,15.77579-3.0275,2.39338-3.56469,6.98524-6.57486,11.86668-8.96403,3.37065-1.64971,1.91521-6.75726-1.81595-6.35581Zm-28.23342,71.6385l-.11651-5.2952c.23499,2.00214,.2231,3.80933,.11651,5.2952Z"
                fill="#f2f2f2"
              />
              <path
                d="M581.40148,315.94602c-3.16093,.3401-6.60921,.85055-10.27718,1.59744-15.55246,3.16687-15.87526,13.72736-15.73896,16.14847l-.10566-.06586c-1.56382,2.50859-2.54325,5.0473-3.13519,7.44337l-.71221-32.36652c.46052-.9602,.87954-2.04896,1.22889-3.16494,1.16419,3.58504,3.07256,6.97195,4.7176,6.74748,2.13909-.2919,3.07167-6.58596,2.67265-11.05881,2.72016,3.50314,7.2981,7.24972,9.02511,6.09446,1.38001-.92313,.56173-4.72359-.94492-8.17871,3.13929,1.89132,6.61613,3.13439,7.69503,1.93342,1.47227-1.63885-2.05557-7.23082-5.30905-10.35235,4.35496,.40613,9.89372-.28771,10.25684-2.26977,.2992-1.6331-2.99722-3.69384-6.5255-5.02014,3.5439-.93441,6.85789-2.56256,6.74798-4.17324-.13057-1.91338-5.05068-3.19543-9.29526-3.39051,3.20154-2.50471,6.14321-5.96711,5.24362-7.53303-.82704-1.43962-4.67439-.88198-8.22406,.38596,2.10064-3.00326,3.5775-6.38742,2.45277-7.54556-1.40106-1.44266-6.37359,1.04738-9.76711,3.79978,.66062-4.28797,.32665-9.70052-1.59659-10.19022-1.60895-.40967-3.88929,2.73886-5.4527,6.16866-.69097-3.59931-2.08979-7.01645-3.7042-7.01645-2.29982,0-4.16418,6.93399-4.16418,11.45149,0,.25536,.00677,.49574,.01843,.72541-.23083-.26761-.49538-.54719-.79707-.84018-3.24076-3.14728-9.51391-6.64064-11.11616-4.99082-1.12474,1.15814,.35212,4.5423,2.45277,7.54556-3.54967-1.26794-7.39702-1.82559-8.22406-.38596-1.11127,1.93439,3.63883,6.76323,7.4999,9.10499-.2321-.02796-.47595-.0515-.73547-.0692-4.50701-.30752-11.55183,1.08049-11.7084,3.37497-.10991,1.61067,3.20409,3.23883,6.74798,4.17324-3.52829,1.3263-6.8247,3.38704-6.5255,5.02014,.36312,1.98206,5.90188,2.6759,10.25684,2.26977-3.25348,3.12154-6.78132,8.7135-5.30905,10.35235,1.0789,1.20097,4.55573-.0421,7.69503-1.93342-1.50665,3.45512-2.32492,7.25558-.94492,8.17871,1.82373,1.21996,6.82541-3.02601,9.4625-6.67949-.2687,4.46965,.80077,10.61004,2.9228,10.85236,.88742,.10134,1.82777-.84507,2.67643-2.3023l-2.40356,34.79012c-.56184,4.05159,3.03199,6.69542,3.35318,8.36434l.51842,23.5593c-.58508-1.67794-1.37316-3.3952-2.43548-5.09933l-.10566,.0659c.13628-2.42136-.18675-12.98155-15.73896-16.14836-3.66797-.74689-7.11625-1.25734-10.27718-1.59744-3.73116-.40145-5.1866,4.70611-1.81595,6.35581,4.88144,2.38917,9.4733,5.39935,11.86668,8.96403,6.11901,9.11359,14.5737,3.84542,15.77578,3.0275,1.34266,2.23509,2.22306,4.48687,2.77913,6.62945l.27531,12.51144c-.06744,.2959-.11414,.46159-.11777,.47403l.12902,.03782,.66628,30.27884,6.18057-.04965-2.21068-30.94947c.37149-1.66957,1.51435-7.35722,0-13.26406l-2.21068-24.31744h0c-.0055-.01877,.12548,.63842,0,0l-2.8837-9.55504c.41933-2.95604,1.3925-6.28098,3.36894-9.57097,1.20206,.81791,9.65677,6.08611,15.77579-3.0275,2.39338-3.56469,6.98524-6.57486,11.86668-8.96403,3.37065-1.64971,1.91521-6.75726-1.81595-6.35581Zm-28.23342,71.6385l-.11651-5.2952c.23499,2.00214,.2231,3.80933,.11651,5.2952Z"
                fill="#f2f2f2"
              />
              <path
                d="M485.44292,216.85712l-2.89819-69.09314s-3.25537-41.01923-5.85986-55.34344c-2.60437-14.32416-20.18408-10.4176-20.18408-10.4176l1.95337,41.01929,8.42773,41.97778,6.55957,57.16211c-.33789,1.6535-.5293,3.45087-.5293,5.33789,0,8.00812,3.34424,14.5,7.46973,14.5s7.46973-6.49188,7.46973-14.5c0-4.21252-.93103-7.99371-2.40869-10.64288Z"
                fill="#ffb6b6"
              />
              <path
                d="M344.36666,198.95449c3.08175-3.6707,6.77264-6.1651,10.08696-7.12522l38.98077-44.06526s3.2555-41.01927,5.8599-55.34346c2.6044-14.32419,20.18408-10.41759,20.18408-10.41759l-1.9533,41.01927-11.06869,44.27477-45.61337,38.72532c-.79655,1.45114-1.77304,2.90165-2.94266,4.29478-5.54929,6.60955-13.07747,9.42409-16.81477,6.28638-3.73715-3.13771-2.2682-11.03944,3.28109-17.64899Z"
                fill="#ffb6b6"
              />
              <polygon
                points="430.13131 76.46862 434.65312 59.08516 452.2687 58.23783 457.53901 82.20035 430.13131 76.46862"
                fill="#ffb6b6"
              />
              <polygon
                points="430.13131 76.46862 434.65312 59.08516 452.2687 58.23783 457.53901 82.20035 430.13131 76.46862"
                opacity=".1"
              />
              <g>
                <polygon
                  points="385.1488 361.25683 368.64994 360.3143 370.81424 410.94912 381.99418 411.58853 385.1488 361.25683"
                  fill="#ffb6b6"
                />
                <path
                  d="M369.38449,394.93938l5.72891,2.61332-.00743,3.47275s1.38213-4.01923,8.80109-4.89615l.88559,3.36705s2.87736,3.30264,2.38384,9.27645l-1.8885,15.99763-5.59502-.12882-.90369-11.132s-1.5413-2.52606-8.64068,9.47718c0,0-7.82052,1.9711-19.93118-2.08958-1.66453-.55811-2.82078-2.11212-2.79901-3.86759,.01202-.96878,.39069-1.8641,1.60549-2.18526,3.0922-.8175,6.11176,.21911,8.10866-2.24898,1.9969-2.46809,12.25193-17.656,12.25193-17.656Z"
                  fill="#2f2e41"
                />
              </g>
              <g>
                <polygon
                  points="473.69834 361.25683 457.19947 360.3143 459.36377 410.94912 470.54371 411.58853 473.69834 361.25683"
                  fill="#ffb6b6"
                />
                <path
                  d="M457.93402,394.93938l5.72891,2.61332-.00743,3.47275s1.38213-4.01923,8.80109-4.89615l.88559,3.36705s2.87736,3.30264,2.38384,9.27645l-1.8885,15.99763-5.59502-.12882-.90369-11.132s-1.5413-2.52606-8.64068,9.47718c0,0-7.82052,1.9711-19.93118-2.08958-1.66453-.55811-2.82078-2.11212-2.79901-3.86759,.01202-.96878,.39069-1.8641,1.60549-2.18526,3.0922-.8175,6.11176,.21911,8.10866-2.24898,1.9969-2.46809,12.25193-17.656,12.25193-17.656Z"
                  fill="#2f2e41"
                />
              </g>
              <circle
                cx="443.67515"
                cy="49.78935"
                r="19.53299"
                fill="#ffb6b6"
              />
              <path
                d="M454.75196,53.03639s-8.58797-14.05193-17.1846-12.50095c-8.59662,1.55098-13.07809,2.95128-13.07809,2.95128,0,0-3.50075-11.20367,8.25239-16.57884,0,0-16.63273-13.92589,1.09406-22.86307,17.72679-8.93718,28.7577-.27561,28.7577-.27561,0,0,14.67194,12.44289-1.59513,23.95832,0,0,14.07934,16.03785-.14106,31.35764,0,0,2.5104-11.66516-.9046-9.27374-3.41501,2.39142-5.20067,3.22497-5.20067,3.22497Z"
                fill="#2f2e41"
              />
              <path
                d="M456.82639,77.77082l-26.69508-3.2555-20.50963,16.60304s-10.20026,28.4207-2.6044,45.57697c.18201,.4111,.32555,28.97393,.32555,28.97393h56.71743s-.05495-19.44142,2.11224-26.48271c.3096-1.0059,.66455-1.75873,1.07149-2.16567,3.2555-3.2555,11.06869-24.09068,7.16209-33.20607-3.9066-9.11539-17.57969-26.04398-17.57969-26.04398Z"
                className="clr"
                fill="#6c63ff"
              />
              <polygon
                points="407.01728 164.36705 371.20681 278.30947 363.39361 368.1612 385.20545 368.1612 403.76178 284.82046 429.31616 236.57758 454.54754 374.67219 476.56445 374.67219 476.03383 187.80663 464.01412 164.36705 407.01728 164.36705"
                fill="#2f2e41"
              />
              <rect y="422.15664" width="656" height="2" fill="#3f3d56" />
              <g>
                <path
                  d="M336.26362,187.42757c-6.50229-10.47037-21.67223-12.93381-32.93992-7.93906-11.26769,4.99475-19.0565,15.64429-24.35105,26.77426-5.29455,11.12996-8.62502,23.12151-14.06681,34.18023-16.01157,32.53845-48.43603,53.78965-68.83256,83.77469-15.32504,22.52941-23.44045,49.88437-22.88108,77.12621,.21426,10.43456,1.9016,21.41209,8.41343,29.56819,9.66535,12.1059,26.77774,14.58924,42.18653,16.18335,8.95057,.92597,19.93647,.89956,24.54601-6.82846,1.82337-3.05693-17.77064-13.72146-17.45627-17.26697,1.69638-19.13259,23.34373-31.28271,25.04011-50.41531,2.6597,13.33132-.7489,27.0942-.2109,40.67759,.53799,13.58339,7.23345,28.94778,20.53418,31.75641,4.10444,.86671,8.73862,.26717,11.84946-2.54713,3.11084-2.81429,4.01941-8.13071,1.24812-11.27992,2.83767,2.89821,7.62638,3.6514,11.21672,1.76422,3.59034-1.88718,5.68538-6.25866,4.90727-10.23943-.5722-2.92733-2.46138-5.38952-4.0973-7.88359-8.86167-13.51019-11.17027-31.11518-6.09158-46.45342,8.97777-27.11391,38.45973-44.81167,43.45404-72.93321,3.70897-20.88416-6.8726-44.54836,4.35624-62.54329,5.06032-8.10949,13.65271-13.22163,20.50586-19.88533,6.85315-6.6637,12.21238-16.85889,8.29043-25.57606l-35.02913-.03819"
                  fill="#3f3d56"
                />
                <path
                  d="M228.23833,426.7864c-.87183,0-1.76514-.23291-2.62842-.6958-1.98853-1.06641-3.48804-3.1748-3.82056-5.37207-.55322-3.6543,1.1875-7.20312,2.58618-10.05469,3.82593-7.79883,7.60791-16.13818,8.16528-24.80273,.60889-9.46045-3.22852-18.22949-9.77563-22.34082-4.86572-3.05469-11.36255-3.84033-18.29248-2.21045-6.13794,1.44336-11.6521,4.39404-17.71045,7.81689-.4812,.27197-1.09082,.10254-1.36255-.37891-.27173-.48047-.10205-1.09082,.37866-1.3623,5.96631-3.37109,11.85034-6.521,18.23633-8.02295,7.45483-1.75195,14.49146-.87793,19.81396,2.46436,7.16016,4.49609,11.36328,13.98047,10.70824,24.1626-.58104,9.03027-4.45141,17.57617-8.36596,25.55518-1.34229,2.73682-2.86377,5.83887-2.40405,8.87451,.23779,1.57129,1.35815,3.14209,2.78833,3.90869,.69653,.37402,1.75879,.71045,2.86206,.19727,.50146-.23438,1.0957-.0166,1.32886,.48389s.0166,1.0957-.48413,1.32861c-.64282,.2998-1.32617,.44873-2.02368,.44873Z"
                  fill="#2f2e41"
                />
                <path
                  d="M304.87324,186.74131c-1.30944,3.58632,.43745,7.60574,2.85869,10.55768,2.42124,2.95194,5.531,5.3258,7.66451,8.49194,4.47207,6.63654,3.80132,15.70946,.36506,22.93685-3.43625,7.22739-9.22913,13.01799-14.91052,18.65402,.41995-2.41674-.80214-4.85632-2.46745-6.65736s-3.7617-3.13792-5.62402-4.73441c-8.67234-7.43441-11.3852-20.98221-6.24412-31.18266"
                  fill="#2f2e41"
                />
                <path
                  d="M186.42241,400.10863c-7.34594-.9001-13.55119,5.70986-20.88233,6.72341-8.47755,1.17204-16.27381-5.53591-20.04567-13.21807-3.77186-7.68216-4.73983-16.40208-7.33471-24.55739-2.59488-8.15531-7.60116-16.41523-15.75739-19.00722-3.42187-1.08745-7.29353-1.02838-10.47242,.64087-3.17889,1.66926-5.50871,5.07712-5.4292,8.66675,.09784,4.41706,3.4851,7.95244,5.53718,11.8651,3.26521,6.2257,3.16378,13.59894,4.60607,20.47941,3.46765,16.54261,16.92397,30.57084,33.30801,34.72366,8.47267,2.14754,17.95749,1.6559,25.29692-3.09078s11.81291-14.30671,9.09603-22.61434"
                  fill="#3f3d56"
                />
              </g>
            </BannerSvgPetsStyle>
          </Grid>
        </Grid>
      </Container>
    </BannerContainerStyle>
  );
};

export default Banner;
