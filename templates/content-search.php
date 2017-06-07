<?php if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
} ?>

<article <?php post_class('column small-12 medium-6 large-4'); ?> data-equalizer-watch>
  <header>
    <h2 class="entry-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
    <?php if (get_post_type() === 'post') { get_template_part('templates/entry-meta'); 
    } ?>
  </header>
  <div class="entry-summary">
    <?php the_excerpt(); ?>
  </div>
</article>
