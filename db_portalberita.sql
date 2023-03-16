-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 16, 2023 at 09:41 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portalberita`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(21, '2014_10_12_000000_create_users_table', 1),
(22, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(23, '2019_08_19_000000_create_failed_jobs_table', 1),
(24, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(25, '2023_03_13_131455_create_news_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `description`, `category`, `author`, `created_at`, `updated_at`) VALUES
(1, 'Fuga omnis dolores perspiciatis provident libero molestiae alias alias.', 'Maiores cum qui tempore veritatis. Et assumenda maiores voluptate error accusamus.', 'Quidem vitae.', 'nbailey@goodwin.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(2, 'Impedit ut aut quia quam est libero.', 'Vel laborum suscipit nisi est. Sint laudantium modi et voluptates dolorum impedit quis. Porro suscipit expedita facere eaque molestias id enim aut.', 'Excepturi.', 'emilio54@gmail.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(3, 'Minima itaque debitis sequi magni.', 'Quia placeat eos quisquam reiciendis voluptatem animi. Dolorem itaque eum voluptate tempore dolorem aliquid.', 'Modi facilis ullam.', 'fhilpert@gmail.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(4, 'Ea et ipsum officiis et libero est.', 'Tempore eveniet ipsa labore doloribus consequatur accusamus. Similique sit aliquam magni aliquid. Autem iste facilis reiciendis velit eum laborum est aut.', 'Repudiandae omnis.', 'thalvorson@emmerich.info', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(5, 'Ea sit modi debitis.', 'Omnis consequatur aut ut. Placeat vitae rem voluptatem voluptates sint aut. Repudiandae rerum doloribus rerum magni aperiam.', 'Fugit rerum iusto.', 'alessandro66@trantow.biz', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(6, 'Enim officia quia et numquam libero eaque porro.', 'Molestiae laudantium incidunt soluta sit iusto nobis nemo quia. Consequuntur sed sed dolores consequatur saepe laboriosam facilis ea. Quidem mollitia aliquid veniam suscipit explicabo qui blanditiis laborum.', 'Eum mollitia.', 'favian80@yahoo.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(7, 'Autem sed voluptate voluptatem ipsam odit debitis est.', 'Similique nihil eveniet sint sint aut. Dolores est deleniti ut totam rem ut maiores. Dolor nemo dicta harum vel rem.', 'Sunt molestiae.', 'blanda.izabella@gmail.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(8, 'Architecto deserunt et et ipsa.', 'Recusandae totam illum fuga doloremque aperiam ut. Culpa sit officiis culpa nostrum voluptatum quasi officia. Dolor iure ut ut est inventore quia qui.', 'Qui cum excepturi.', 'rjerde@eichmann.net', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(9, 'Doloribus ducimus quasi numquam est officiis inventore.', 'Voluptas fugiat et minima nihil qui natus ut. Quos consequatur quibusdam deserunt vero eos id occaecati.', 'Sit in autem id.', 'kunde.elouise@hotmail.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(10, 'Optio reiciendis cupiditate sit.', 'Molestias et libero possimus voluptatem. Ratione totam quam nostrum in eligendi omnis. Rerum quisquam aut nemo voluptatem in ad.', 'Beatae quidem eos.', 'lblock@corkery.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(11, 'Tempora aperiam quos quo doloremque quia temporibus voluptates minima.', 'Unde aut aut magnam esse et natus atque. Eum et et velit unde maxime nostrum. Nobis enim minus occaecati fuga ea id accusamus.', 'Explicabo omnis.', 'fjaskolski@von.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(12, 'Velit est et aut autem.', 'Quaerat cumque nobis facilis minima autem. Totam occaecati cum accusamus laboriosam quidem. Quibusdam corrupti vel nostrum maxime porro non.', 'Excepturi.', 'kaycee.tillman@kreiger.net', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(13, 'Aliquid vero cumque amet qui aut animi.', 'Rerum tenetur impedit quia non sed. Iusto est consequuntur et accusantium. Eveniet eum omnis deleniti voluptate quia quae corporis.', 'Ut porro culpa iure.', 'reynolds.maud@stark.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(14, 'Nihil provident velit voluptas.', 'Similique debitis optio est eius ut. Sit aliquid impedit soluta nobis.', 'Nam libero beatae.', 'jayne.wehner@gmail.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(15, 'Officiis dicta consequatur cupiditate quas qui temporibus.', 'Eveniet illo veritatis molestiae nemo. Mollitia et totam repellendus consequatur. Voluptas omnis blanditiis cupiditate iusto magni est.', 'Labore et voluptas.', 'tgoyette@gmail.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(16, 'Laboriosam ea nostrum eius nostrum et architecto.', 'Ea qui non veniam. Voluptatem odit vero maxime praesentium.', 'Quam quia voluptas.', 'wdooley@jakubowski.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(17, 'Et aut maiores ad et soluta laboriosam.', 'Pariatur quia doloribus consequatur cumque eligendi debitis voluptates ex. Sit est reprehenderit labore. Eos voluptas voluptatum alias accusamus facilis sint consequatur.', 'Odio enim.', 'miguel91@gmail.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(18, 'Quod harum quasi animi iste et voluptate possimus et.', 'Facere qui eius sapiente facere placeat. Quod et excepturi velit reprehenderit atque.', 'At laboriosam.', 'isaias.johnston@weber.org', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(19, 'Numquam ea omnis nihil ipsam facilis alias culpa sed.', 'Animi officiis est dolorum. Praesentium consequatur nihil molestiae qui vero.', 'Sunt eos ut sit et.', 'theodore62@carroll.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(20, 'Eius facilis corporis corporis voluptatem et ea.', 'Sunt occaecati dignissimos ullam aliquam voluptate aut. Voluptate qui aut maiores qui et voluptas. Labore cupiditate molestiae maiores non.', 'Est accusantium hic.', 'orlo30@paucek.net', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(21, 'Aut praesentium est eius neque velit explicabo.', 'Eveniet laboriosam quod ea sint molestiae. Assumenda autem rerum odio voluptas non doloribus aspernatur soluta.', 'Sint occaecati unde.', 'wcarroll@yahoo.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(22, 'Eos sed ut occaecati aut.', 'Autem similique et commodi laboriosam totam perferendis dignissimos non. Dicta rem enim velit quis voluptatem nam. Eos minima totam unde non excepturi ea facilis et.', 'Nam temporibus.', 'olen34@yahoo.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(23, 'Deleniti perspiciatis id voluptatem earum non officia.', 'Odio dolores assumenda sint consequatur et dignissimos est. Ut ab enim minus nostrum doloremque ea dolor.', 'Rerum est.', 'considine.ivory@yahoo.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(24, 'Rerum temporibus aliquam quisquam at est vitae.', 'Mollitia soluta nihil illum fugiat id cumque odit. Dolorem ut quis molestiae rem corrupti aliquid cumque.', 'Aut qui accusamus.', 'cornelius63@yahoo.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(25, 'Libero repellat praesentium impedit nam excepturi.', 'Assumenda est et ut et veritatis nesciunt accusantium. Iure soluta fugiat exercitationem suscipit eum sunt.', 'Ut alias voluptas.', 'stone.armstrong@yahoo.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(26, 'Aut ducimus ratione eum voluptatibus nihil dolores voluptas ea.', 'Eum ducimus amet qui consequatur. Consequatur quia aut non.', 'Perferendis autem.', 'ustreich@hotmail.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(27, 'Natus accusantium officia expedita sequi tempore voluptatibus consequatur.', 'Autem quia quo voluptatem fugiat ad et iusto in. Et quasi laborum qui ea accusamus omnis.', 'Ea ratione omnis.', 'hagenes.luna@barrows.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(28, 'Nisi sit aperiam quis ipsam ex adipisci eum.', 'Eveniet consectetur itaque quasi magnam dolor saepe necessitatibus accusamus. Rerum laborum harum deserunt. Et cum aut voluptatem.', 'Esse voluptas.', 'zachary.haley@purdy.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(29, 'Dolor dolorem provident qui nisi odio.', 'Necessitatibus commodi aut at commodi impedit vel voluptatem. Quo consequatur dolores modi consequatur. Amet dolor amet corrupti veniam ab ut ipsam.', 'Nihil iusto.', 'hilton79@emmerich.org', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(30, 'Et recusandae totam veritatis et.', 'Repudiandae eum accusamus incidunt blanditiis aperiam est. Eaque alias consequatur rerum nostrum est cumque.', 'Autem aliquam.', 'elouise27@herman.biz', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(31, 'Consequatur earum unde a et quia.', 'Sint voluptatem rerum sint ut. Sequi aut sit qui. Voluptatem alias non voluptas hic.', 'Vero vero nulla.', 'heloise61@yahoo.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(32, 'Magni qui et et odit magnam qui.', 'Qui ea voluptatum deleniti explicabo. Incidunt exercitationem quos iste.', 'Quam quia corporis.', 'felix08@hotmail.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(33, 'Corporis adipisci cumque repudiandae repellendus magnam quo quae similique.', 'Atque distinctio nulla architecto numquam ratione quia inventore. Distinctio nobis illum iste reiciendis ut optio dolores odio. Autem saepe laudantium nisi sint qui possimus.', 'Nisi non sed est.', 'zemlak.garett@collins.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(34, 'Blanditiis nemo voluptatem incidunt.', 'Rerum ut sit laborum illo. Incidunt nulla qui non nemo. Ut non libero tempore.', 'Velit et numquam.', 'bertha.zboncak@dare.info', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(35, 'Voluptatem quos excepturi quas.', 'Quas cupiditate distinctio sit officia. Facere delectus iusto ea officia omnis. Commodi illum labore reprehenderit culpa exercitationem optio.', 'Magni aliquid.', 'rebekah54@kilback.biz', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(36, 'Omnis illum sit odit.', 'Quia ipsam debitis nobis consequuntur ea eius. Aut ea fugit voluptatum earum.', 'Itaque sit dolores.', 'monty22@gmail.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(37, 'Minus itaque enim quia accusantium libero et.', 'Similique vitae et libero earum debitis qui officiis. Atque tempore reprehenderit aut culpa exercitationem.', 'Tenetur fuga quia.', 'ybradtke@littel.info', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(38, 'Voluptatibus est optio voluptatum repudiandae ut sit omnis illo.', 'Laborum amet deleniti asperiores iusto qui quo molestiae quo. Pariatur voluptas eos ipsam eligendi aut voluptatem quia occaecati. Nisi assumenda a sed natus est maxime qui.', 'Ipsa ab eos.', 'kelsie28@schmitt.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(39, 'Rerum fugit quod et ratione.', 'Ratione id omnis sed sed et ut. Adipisci occaecati aliquam sint velit quam non magnam. Quasi rem cumque aliquid et et hic maiores quaerat.', 'Dolor quis ex qui.', 'mae37@wiegand.net', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(40, 'Consequatur dolores dolorem amet ea quis minima.', 'Vel vero eius provident. Mollitia consequatur impedit rerum enim debitis voluptatum. Et aut rem aut voluptas tenetur.', 'Natus odit corporis.', 'dsipes@torphy.net', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(41, 'Qui ipsam praesentium ut.', 'Totam quibusdam ipsa molestiae earum quia dolores. Laudantium eos sit unde molestiae eius voluptatibus. Deleniti et accusamus maiores natus quis voluptas accusamus.', 'Provident molestias.', 'price.dereck@kreiger.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(42, 'Sit animi blanditiis maxime quam ducimus consequatur aspernatur.', 'Cumque qui et hic perspiciatis sed deserunt aut. Voluptas quam excepturi ipsa quod. Aut sapiente ut vel molestias quo dolores ad.', 'Consequuntur sed.', 'reichert.cara@gmail.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(43, 'Dolorem sed alias officia rerum.', 'Repudiandae quisquam corrupti itaque molestias assumenda totam modi. Consequatur adipisci est tempore. Minima quaerat consequatur asperiores eveniet illum laudantium qui.', 'Vel ex eum quae.', 'zbogisich@yahoo.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(44, 'Est voluptatum id voluptate voluptas maxime.', 'Laboriosam qui nam quia similique explicabo ea repellendus. Beatae amet porro necessitatibus qui explicabo illum quia.', 'Unde quia autem.', 'dicki.abigail@yahoo.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(45, 'Qui sunt ipsam deleniti praesentium ad.', 'Nam non illum a quae rerum consequatur consectetur. Quo rerum et cupiditate molestiae omnis. Voluptatem quam aliquid nulla eveniet itaque.', 'Pariatur neque qui.', 'quigley.richmond@legros.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(46, 'Et soluta ex sit quo corporis sit et.', 'Sunt et id totam eos a et adipisci. Consequuntur dolores id iusto aut quo.', 'Et dolor ut.', 'clint.brakus@hotmail.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(47, 'Voluptas provident occaecati fuga tenetur et.', 'Distinctio inventore veritatis voluptatem beatae. Est nihil est et maiores velit.', 'Aspernatur culpa.', 'lhalvorson@gmail.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(48, 'Sint et rem quas dolores quos.', 'Facere placeat exercitationem expedita quae laboriosam facere ut. Exercitationem quia mollitia voluptate quae repellat. Eum et dolorem sint sed suscipit beatae esse.', 'Enim odit.', 'cquitzon@gmail.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(49, 'Voluptatem corporis laudantium nemo est voluptate repudiandae est.', 'A labore facilis officia cupiditate non esse. Et eum possimus eligendi sapiente. A vel eaque et tenetur repellendus vel error.', 'Ipsum maxime.', 'jayne96@greenfelder.org', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(50, 'Nihil dolorem quasi qui.', 'Ad molestiae cum animi facere qui debitis. Molestias laboriosam magni enim sint eaque. Quas est vel nobis qui.', 'Tempore inventore.', 'frankie29@hotmail.com', '2023-03-13 20:27:57', '2023-03-13 20:27:57'),
(58, 'kdoksosdadskdok', 'skdoakdodasdasd ksdajsd', 'dasddkaksd', 'heheboy@gmail.com', '2023-03-15 00:28:03', '2023-03-16 01:09:13'),
(59, 'Kenalin Nama saya wkawkoake', 'sdkaksdoa', 'skdoaksdoakeklr;', 'heheboy@gmail.com', '2023-03-15 01:45:17', '2023-03-15 01:45:17'),
(60, 'oadkao', 'skdaoksd', 'sdkaoksdok', 'heheboy@gmail.com', '2023-03-16 01:08:54', '2023-03-16 01:08:54');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Mr Hehe Boy', 'heheboy@gmail.com', NULL, '$2y$10$VvpAdv7phRx17lqoW5q4ruRhHrh2NOLqu3sswWgoxT3uwlO8Fdx/O', NULL, '2023-03-14 00:34:13', '2023-03-15 01:54:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
